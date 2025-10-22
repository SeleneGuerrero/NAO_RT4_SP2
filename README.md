# 🍽️ NAO_RT4_SP2 – Restaurant Reviews REST API

This project is a **RESTful API** built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.
It allows you to manage restaurant reviews — including importing data from a CSV file, creating new reviews, retrieving them, updating, and deleting.

---

## 🚀 Technologies Used

* **Node.js** – Runtime environment
* **Express.js** – Framework for building the HTTP server
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for schema and model management
* **dotenv** – Environment variables configuration
* **csv-parser** – CSV file reading utility
* **fs (File System)** – For local file reading

---

## 📁 Project Structure

```
NAO_RT4_SP2/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   └── controller.js       # CRUD logic (users)
│   ├── models/
│   │   └── user.model.js       # Mongoose model (reviews)
│   ├── routes/
│   │   └── user.routes.js      # Main API routes
│   └── restaurants.csv         # Initial CSV data
├── .env                        # Environment variables
├── app.js                      # Server entry point
├── package.json
└── README.md                   # Project documentation
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/NAO_RT4_SP2.git
cd NAO_RT4_SP2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a **.env** file in the project root with the following content:

```env
MONGO_URI=mongodb://127.0.0.1:27017/restaurantDB
PORT=3000
```

> Make sure MongoDB is running locally before starting the server.

### 4. Start the server

```bash
npm start
```

The server will run at:
📍 **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Available Endpoints

### 📍 Base URL

```
http://localhost:3000/api/reviews
```

---

### 🔹 GET – Retrieve All Reviews

**Route:** `/api/reviews`

**Method:** `GET`

**Example Response:**

```json
[
  {
    "_id": "6700c2a3f1f1a9b8a8e7c9f0",
    "review_id": 1,
    "restaurant_name": "Shake Shack",
    "user_name": "Maria Lopez",
    "rating": 4.5,
    "review_text": "Great burgers and fries, fast service in Times Square.",
    "date": "2023-11-15",
    "city": "New York",
    "cuisine": "American"
  }
]
```

---

### 🔹 GET – Retrieve Review by ID

**Route:** `/api/reviews/:id`

**Method:** `GET`

---

### 🔹 POST – Add a New Review

**Route:** `/api/reviews`

**Method:** `POST`

**Example Request Body:**

```json
{
  "review_id": 41,
  "restaurant_name": "El Buen Sabor",
  "user_name": "Laura Rivas",
  "rating": 4.9,
  "review_text": "Increíble comida mexicana, los tacos son deliciosos.",
  "date": "2025-03-10",
  "city": "Monterrey",
  "cuisine": "Mexican"
}

```

**Example Response:**

```json
{
"message": "Review added successfully",
"review_id": 41
}
```

---

### 🔹 PUT – Update an Existing Review

**Route:** `/api/reviews/:id`

**Method:** `PUT`

**Example Request Body:**

```json
{
  "rating": 4.9,
  "review_text": "Even better on my second visit — flawless burgers!"
}
```

---

### 🔹 DELETE – Remove a Review

**Route:** `/api/reviews/:id`

**Method:** `DELETE`

**Example Response:**

```json
{ "message": "Review deleted successfully" }
```

---

### 🔹 POST – Import Reviews from CSV

**Route:** `/api/reviews/import`

**Method:** `POST`

Imports the `restaurants.csv` file and replaces existing data in the collection.

**Example Response:**

```json
{
  "message": "✅ Reviews imported successfully",
  "count": 40
}
```

---

## 🧪 Testing with Postman

You can test the API using the following Postman requests:

| Method | Request Name      | Description               |
| ------ | ----------------- | ------------------------- |
| GET    | GET_Reviews       | Retrieve all reviews      |
| GET    | GET_Reviews_ID    | Retrieve a review by ID   |
| POST   | POST_Add_Review   | Add a new review          |
| PUT    | PUT_Upload_Review | Update an existing review |
| DELETE | DEL_Delete_Review | Delete a review           |

---

## 🧠 Additional Notes

* The `review_id` field is auto-generated if not provided.
* The `/import` endpoint **clears the collection** before inserting new data.
* The dataset (`restaurants.csv`) includes **40 real-world sample reviews**.

---

## 👨‍💻 Author

**Selene Guerrero**

📅 Developed in October 2025

💬 API for managing restaurant reviews using Node.js and MongoDB
