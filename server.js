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
// apiRoute(app);

// Connect to mongoose and optimize for Heroku Deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//***************************************** */
//TEST
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema({
//     day: {
//         type: Date,
//         default: Date.now
//     },
//     exercises: [{
//         type: String,
//         name: String,
//         duration: Number,
//         weight: Number,
//         reps: Number,
//         sets: Number,
//     }]
// });

// const Workout = mongoose.model("Workout", WorkoutSchema);


const data = {
    day: new Date().setDate(new Date().getDate() - 9),
    exercises: [{
        type: "Yoga",
        name: "Daily Practice",
        duration: 10,
        weight: 205,
        reps: 1,
        sets: 1,
    }]
}

Workout.create(data)
    .then((dbWorkout) => {
        console.log(dbWorkout)
    })
    .catch(({ message }) => {
        console.log(message)
    })



// (async () => {
//     const newWorkout = new Workout(data)

//     await newWorkout.save()

//     console.log(newWorkout)
// })();

//END TEST
//***************************************** */

app.get("/connected", (req, res) => {
    res.send("connected correctly");
});

app.get("/all", (req, res) => {
    // console.log(db.Exercise)
    Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    // console.log(db.Exercise)
    Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        });
});

// db.Exercises.create({ type: "resistance" })
//     .then(dbExercises => {
//         console.log(dbExercises)
//     })
//     .catch(({ message }) => {
//         console.log(message)
//     })


// app.post("/stats", (req, res) => {
//     console.log(req.body)
//     const workout = new Workout(body);

//     Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout)
//         })
//         .catch(err => {
//             res.json(err)
//         })

// })



// app.get("/api/workouts", (req, res) => {
//     // console.log(req.body)
//     console.log(db.Workout)
//     console.log("line 66")

//     db.Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout)
//         })
//         .catch(err => {
//             res.json(err)
//         })

// })

// app.get("/api/workouts/range", (req, res) => {
//     // console.log(req.body)
//     console.log(db.workout)
//     console.log("line 82")
// })


// Start the server
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
