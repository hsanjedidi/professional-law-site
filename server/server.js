// server.js
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.options("*", cors());

app.use(express.json());

app.post("/api/send-contact", async (req, res) => {
  try {
    const recipient = process.env.RECIPIENT;
    const payload = req.body;
    if (typeof payload !== "object" || payload === null) {
      res.status(400).json({ success: false, error: "Invalid payload" });
      return;
    }
    payload.to = [{ email: recipient }];
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.contactUsKey,
        },
      },
    );
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.log("payload of the request on error : ", req.body);
    console.error(error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, error: error.response?.data || error.message });
  }
});

app.get("/api/health", async (req, res) => {
  res.json({ success: true, data: "yes" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Email proxy running on port ${PORT}`));
