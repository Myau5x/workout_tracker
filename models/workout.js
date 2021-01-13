const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  type: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  duration: Number,
  distance: Number
      
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [ExerciseSchema  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;