// Exporting an object containing all the models

// module.exports = {
//     Exercises: require("./Exercises"),
//     Cardio: require("./Cardio"),
//     Resistance: require("./Resistance")
// };

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// TEST SCHEMA
//***************************************** */
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                default: "climbing",
            },
            name: {
                type: String,
                // default: "danger",
            },
            duration: {
                type: Number,
                // default: 100,
            },
            weight: {
                type: Number,
                // default: 100,
            },
            reps: {
                type: Number,
                // default: 100,
            },
            sets: {
                type: Number,
                // default: 100,
            },
        },
    ],
});

// END TEST SCHEMA
//***************************************** */

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;



// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const ExercisesSchema = new Schema({
//     type: String,
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number,
// });

// const Exercises = mongoose.model("Exercises", ExercisesSchema);

// module.exports = Exercises;


// Back up DB from Jan 6th
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