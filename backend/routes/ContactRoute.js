import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("POST /api/contact received:", req.body);

    const { name, email, mobile, message } = req.body;

    // Validate fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !mobile?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ----------------------------------
    // 1. SAVE MESSAGE TO MONGODB
    // ----------------------------------

    const savedContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      message: message.trim(),
    });

    console.log("Contact saved to MongoDB");

    // ----------------------------------
    // 2. CREATE GMAIL TRANSPORTER
    // ----------------------------------

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ----------------------------------
    // 3. SEND EMAIL TO YOUR GMAIL
    // ----------------------------------

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,

      // Your Gmail address
      to: process.env.EMAIL_USER,

      // Clicking Reply will reply to the visitor
      replyTo: email.trim(),

      subject: `New Portfolio Message from ${name.trim()}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <p>
          Someone has submitted the Contact Me form
          on your portfolio website.
        </p>

        <hr>

        <p>
          <strong>Name:</strong>
          ${name.trim()}
        </p>

        <p>
          <strong>Email:</strong>
          ${email.trim()}
        </p>

        <p>
          <strong>Mobile:</strong>
          ${mobile.trim()}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message.trim()}
        </p>

        <hr>

        <p>
          Sent from your portfolio website.
        </p>
      `,
    });

    console.log("Email sent successfully");

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact: savedContact,
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message",
      error: error.message,
    });
  }
});

export default router;