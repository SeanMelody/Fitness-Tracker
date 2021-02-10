// Required Consts!
const express = require("express");
// Logger helps development by giving network information in the console.
const logger = require("morgan");
const mongoose = require("mongoose");

// Access Routes
const htmlRoute = require('./routes/htmlRoutes.js');
const apiRoute = require('./routes/apiRoutes.js');

// set app as Express
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require static files so CSS and JS work!
app.use(express.static("public"));

// Set the PORT for Heroku deployment or to 3003 cause I'm crazy!
const PORT = process.env.PORT || 3003;

// require the databse models folder (index and then workout.js)
const db = require("./models");

// Invoke routes
htmlRoute(app);
apiRoute(app);

// Connect to mongoose and optimize for Heroku Deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


// Start the server and console log where it is listening.
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});


