// Required Consts!
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3003;

// const db = require("./seeders/seed.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require static files so CSS and JS work!
app.use(express.static("public"));

// Connect to mongoose and optimize for Heroku Deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
