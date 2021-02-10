const db = require("../models");

module.exports = (app) => {

    // App.get to find all the workouts
    app.get("/api/workouts", (req, res) => {
        // console.log("line 60")
        // console.log(Workout.exercises)
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
        let pastExercises = [];

        db.Workout.find({ _id: newWorkoutId })
            .then(dbWorkout => {
                pastExercises = dbWorkout[0].exercises
                res.json(dbWorkout[0].exercises);
                let allExercises = [...pastExercises, body]
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err)
            })
        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }

            })
        }

    })


    app.get("/api/workouts/range")

    // // App.Post to update the workout.
    // app.post("/api/workouts", (req, res) => {
    //     console.log(req.body)
    //     console.log("line 29")
    //     // const workout = new Workout(req.body)
    //     Workout.findByIdAndUpdate()
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err)
    //         })

    // })

    // App.get to let me know that the database is connected
    app.get("/connected", (req, res) => {
        res.send("connected correctly");
    });

    // App.get all to let me check the database.
    app.get("/all", (req, res) => {
        // console.log(db.Exercise)
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

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

    // // App.get to find all the workouts
    // app.get("/api/workouts", (req, res) => {
    //     console.log("line 60")
    //     // console.log(Workout.exercises)
    //     Workout.find({})
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         })
    // });


    // app.get("/api/workouts/range", (req, res) => {
    //     // console.log(db.Exercise)
    //     Workout.aggregate({ $add: [duration] })
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });

    // db.sales.aggregate( [ { $project: { item: 1, total: { $subtract: [ { $add: [ "$price", "$fee" ] }, "$discount" ] } } } ] )


    // CODE WITH PABLO

    // app.put("/api/workouts/:id", (req, res) => {
    //     console.log(req.params)
    //     console.log(req.body)
    //     console.log("line 102")
    //     const bodyTest = req.body
    //     console.log(bodyTest)
    //     // const test = Workout.exercises(bodyTest)
    //     const { type, name, duration, weight, reps, sets} = req.body
    //     let durationNum = parseInt(duration);
    //     let  weightNum = parseInt(weight);
    //     let repsNum = parseInt(reps);
    //     let setsNum = parseInt(sets);




    //     Workout.create({ exercises: [{type, name, duration: durationNum, weight: weightNum, reps: repsNum, sets: setsNum}] })
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err)
    //         })
    //     const workout = new Workout(req.body)
    //     console.log(workout)
    //     console.log(workout.id)
    //     console.log("line 102")
    // })

}