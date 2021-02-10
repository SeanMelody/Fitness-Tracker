const Workout = require("../models");

module.exports = (app) => {

    // App.Put to send the new Workout to the database
    app.put("/api/workouts/:id", (req, res) => {
        // console.log(req.params)
        // console.log(req.body)
        console.log("line 09")
        const newWorkout = req.body
        console.log(newWorkout)

        Workout.create({ exercises: [newWorkout] })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })
        // const workout = new Workout(req.body)
        // console.log(workout)
        // console.log(workout.id)
        // console.log("line 23")
    })

    // App.Post to update the workout.
    app.post("/api/workouts", (req, res) => {
        console.log(req.body)
        console.log("line 29")
        // const workout = new Workout(req.body)
        Workout.findByIdAndUpdate()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })

    })

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

    // App.get to find all the workouts
    app.get("/api/workouts", (req, res) => {
        console.log("line 60")
        // console.log(Workout.exercises)
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    app.get("/api/workouts/range", (req, res) => {
        // console.log(db.Exercise)
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        // console.log(db.Exercise)
        Workout.aggregate({ $add: [duration] })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

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