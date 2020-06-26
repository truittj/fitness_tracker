const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type:{
        type: String,
        trim: true,
        required: "Enter Exercise Type"
      },
      name:{
        type: String,
        trim: true,
        required: "Enter Exercise name"
      },
      duration:{
        type: Number,
        required: "Enter Exercise Duration"
      },
      weight:{
        type: Number,
        required: "Enter Exercise Weight"
      },
      reps:{
        type: Number,
        required: "Enter Exercise Rep Count"
      },
      sets:{
        type: Number,
        required: "Enter Exercise Number of Sets"
      },
      distance:{
        type: Number,
        required: "Enter Exercise distnce"
      },
      
      
      // type: Schema.Types.ObjectId,
      // ref: "Exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;