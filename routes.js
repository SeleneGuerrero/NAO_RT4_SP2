import express from "express";
import fs from "fs";
import csv from "csv-parser";
import Review from "./model.js";

const router = express.Router();

/* -------------------- GET: obtener todas las reseñas -------------------- */
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* -------------------- POST: importar reseñas desde CSV -------------------- */
router.post("/import", async (req, res) => {
  try {
    const results = [];
    fs.createReadStream("./restaurants.csv") // Asegúrate que el CSV esté en la misma carpeta
      .pipe(csv({ separator: "\t" })) // Separador de tabulaciones
      .on("data", (data) => {
        // Convertir review_id y rating a números
        results.push({
          review_id: Number(data.review_id),
          restaurant_name: data.restaurant_name,
          user_name: data.user_name,
          rating: Number(data.rating),
          review_text: data.review_text,
          date: data.date,
          city: data.city,
          cuisine: data.cuisine,
        });
      })
      .on("end", async () => {
        // Limpiar la colección antes de volver a importar
        await Review.deleteMany({});
        await Review.insertMany(results);
        res.json({
          message: "✅ Reviews imported successfully",
          count: results.length,
        });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* -------------------- POST: agregar una reseña manual -------------------- */
router.post("/", async (req, res) => {
  try {
    const { review_id, restaurant_name, user_name, rating, review_text, date, city, cuisine } = req.body;

    // Generar review_id automático si no se envía
    const lastReview = await Review.findOne().sort({ review_id: -1 });
    const newId = lastReview ? lastReview.review_id + 1 : 1;

    const newReview = new Review({
      review_id: review_id || newId,
      restaurant_name,
      user_name,
      rating,
      review_text,
      date,
      city,
      cuisine,
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
