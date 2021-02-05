const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  type: {
    type: String,
    unique: true
  },
  resistance: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resistance"
    }
  ],
  cardio: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio"
    }
  ]
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;