// Required Consts!
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Access Routes
const htmlRoute = require('./routes/htmlRoutes.js');
const apiRoute = require('./routes/apiRoutes.js');



const PORT = process.env.PORT || 3003;

// const Workouts = require("./seeders/seed.js");

const Workout = require("./models");
// const Workout = require("./models");
// const Workout = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require static files so CSS and JS work!
app.use(express.static("public"));

// Invoke routes
htmlRoute(app);
apiRoute(app);

// Connect to mongoose and optimize for Heroku Deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


// Start the server
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});


