import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import contactRoutes from "./routes/contactRoute.js";

dotenv.config();

const app = express();

// ==========================================
// CORS
// ==========================================

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "https://prikshitcsengineer.com",
  "https://www.prikshitcsengineer.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests without Origin
    // Example: Postman, curl, server-to-server
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.log("Blocked CORS origin:", origin);

    return callback(new Error("Not allowed by CORS"));
  },

  methods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],

  credentials: true,
};

// IMPORTANT: CORS should come before routes
app.use(cors(corsOptions));

// Explicitly handle OPTIONS preflight requests
app.options(/.*/, cors(corsOptions));

// ==========================================
// Body parser
// ==========================================

app.use(express.json());

// ==========================================
// MongoDB
// ==========================================

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("MONGO_URI is missing");

  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error(
      "MongoDB connection error:",
      error
    );
  });

// ==========================================
// Contact route
// ==========================================

app.use("/api/contact", contactRoutes);

// ==========================================
// Test route
// ==========================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio backend is running",
  });
});

// ==========================================
// 404
// ==========================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ==========================================
// Error handler
// ==========================================

app.use((err, req, res, next) => {
  console.error("Server error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

// ==========================================
// Server
// ==========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Server running on port ${PORT}`
  );
});