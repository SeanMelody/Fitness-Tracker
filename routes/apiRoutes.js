const Workout = require("../models");

module.exports = (app) => {

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.params)
        console.log(req.body)
        console.log("line 102")
        const newWorkout = req.body
        console.log(newWorkout)




        Workout.create({ exercises: [newWorkout] })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })
        const workout = new Workout(req.body)
        console.log(workout)
        console.log(workout.id)
        console.log("line 102")
    })

    app.post("/api/workouts", (req, res) => {
        console.log(req.body)
        console.log("line116")
        const workout = new Workout(req.body)
        Workout.updateOne()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })

    })

    app.get("/connected", (req, res) => {
        res.send("connected correctly");
    });


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


    app.get("/api/workouts", (req, res) => {
        console.log("line 142")
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
        Workout.find({ type: "resistance" })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        // console.log(db.Exercise)
        Workout.find({ type: "cardio" })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });


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