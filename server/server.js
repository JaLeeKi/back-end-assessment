const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {createMessage, deleteMessage, getCompliment, getFortune, getActivity} = require("./serverController.js")

app.get("/api/compliment", getCompliment);

app.get("/api/fortune/", getFortune)

app.get("/api/activity", getActivity)

app.post("/api/messages/", createMessage);

app.delete("/api/messages/:id", deleteMessage)

app.listen(4000, () => console.log("Server running on 4000"));
