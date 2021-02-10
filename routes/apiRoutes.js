// Require the database
const db = require("../models");

// export the routes
module.exports = (app) => {

    // App.get to find all the workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    // App.Post to update the workout.
    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await db.Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (err) {
            console.log("Error Creating Workout: ", err)
        }
    })

    // App.Put to send the new Workout to the database
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        const newWorkoutId = params.id;
        let totalExercises = [];

        // gets all the currently saved exercises in the current workout
        db.Workout.find({ _id: newWorkoutId })
            .then(dbWorkout => {
                totalExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...totalExercises, body]
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });
        // Function to update the workout by the newWorkoutID
        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(newWorkoutId, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }

            })
        }
    })

    // App.get to get the data to display on the Stats page
    app.get("/api/workouts/range", (req, res) => {
        // console.log(db.Exercise)
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // // App.get to let me know that the database is connected
    // app.get("/connected", (req, res) => {
    //     res.send("connected correctly");
    // });

}