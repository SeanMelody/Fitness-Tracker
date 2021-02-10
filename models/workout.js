// Consts for Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declare the Workout Schema
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Must enter an exercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Must enter a name for the exercise"
                },
                duration: {
                    type: Number,
                    required: "Duration in Minutes Required"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        // JSON it!
        toJSON: {
            virtuals: true
        }
    }
);

// Add the Virtual Total Duration to get the exercises Lengths
workoutSchema.virtual("totalDuration").get(function () {
    // Just get the sums!
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// Const for the Mongoose Database 
const Workout = mongoose.model("Workout", workoutSchema);

// Gotta Module Export it!
module.exports = Workout;