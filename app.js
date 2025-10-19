import express from "express";
import dotenv from "dotenv";
import connectDB from "/Users/selen/Repositorios/NAO_RT4_SP2/db.js";
import reviewRoutes from "/Users/selen/Repositorios/NAO_RT4_SP2/routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas principales
app.use("/api/reviews", reviewRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
