require("dotenv").config();

const express = require("express");
const cors = require("cors");
const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.DOMAIN;
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const app = express();
app.use(express.json());
app.use(cors());
//
// On configure MAILGUN
const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "Elliot Scotto",
  key: process.env.MAILGUN_API_KEY,
});
console.log(API_KEY);
//
//
//On crée des routes pour répondre aux requêtes envoyées par le formulaire
app.post("/send-email", async (req, res) => {
  try {
    console.log("Test");
    const messageData = {
      from: `${req.body.firstname} ${req.body.lastname} <${req.body.email}>`,
      to: "elliot2089@gmail.com",
      subject: `Formulaire JS`,
      text: req.body.message,
    };

    const result = await client.messages.create(DOMAIN, messageData);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});
//
app.get("/", (req, res) => {
  res.json("Server is up");
});
app.listen(3000, () => {
  console.log("Server has started");
});
