let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [ mongoose.Types.ObjectId("5ffd084fe8d51facaedba68b")
      
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [ mongoose.Types.ObjectId("5ffd084fe8d51facaedba683")
      
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [ mongoose.Types.ObjectId("5ffd084fe8d51facaedba684")
      
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [ mongoose.Types.ObjectId("5ffd084fe8d51facaedba685")
      
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [mongoose.Types.ObjectId("5ffd084fe8d51facaedba686")
      
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [mongoose.Types.ObjectId("5ffd084fe8d51facaedba687")
      
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [mongoose.Types.ObjectId("5ffd084fe8d51facaedba688")
      
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [mongoose.Types.ObjectId("5ffd084fe8d51facaedba689")
      
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [mongoose.Types.ObjectId("5ffd084fe8d51facaedba68a")
     
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
