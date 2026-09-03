import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    console.log("POST /api/contact received:", req.body);

    const { name, email, mobile, message } = req.body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !mobile?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create and save contact in MongoDB
    const savedContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      message: message.trim(),
    });

    console.log("Contact saved successfully:", savedContact._id);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact: savedContact,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again later.",
    });
  }
});

export default router;