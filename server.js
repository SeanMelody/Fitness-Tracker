// Required Consts!
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Access Routes
const htmlRoute = require('./routes/htmlRoutes.js');
// const apiRoute = require('./routes/apiRoutes.js');
// const authorRouter = require('./routes/author-api-routes.js');


const PORT = process.env.PORT || 3003;

// const Workouts = require("./seeders/seed.js");

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require static files so CSS and JS work!
app.use(express.static("public"));

// Invoke routes
htmlRoute(app);
// apiRoute(app);

// Connect to mongoose and optimize for Heroku Deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


app.get("/connected", (req, res) => {
    res.send("connected correctly");
});

app.get("/all", (req, res) => {
    // console.log(db.Exercise)
    db.Resistance.find({})
        .then(dbResistance => {
            res.json(dbResistance);
        })
        .catch(err => {
            res.json(err);
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
