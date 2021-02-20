const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({

    day: {
        type: Date,
        default: Date.now
    },
    exercises:[
        {
            // add type,name,duration required + add other validation
            // default day.now value for day
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
    
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;