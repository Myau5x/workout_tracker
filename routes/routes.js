const router = require("express").Router();
const db = require("../models/");
const path = require('path');



/*
/api/workouts GET
/api/workouts/" + id  PUT
/api/workouts POST
/api/workouts/range GET 
/exercise GET
/stats GET
*/


router.get('/exercise',function(req,res){
    res.sendFile(path.join(__dirname,'../public/exercise.html'));
    //__dirname : It will resolve to your project folder.
  });

router.get('/stats',function(req,res){

   // console.log(__dirname+'/public/stats.html');
    res.sendFile(path.join(__dirname,'../public/stats.html'));
    //__dirname : It will resolve to your project folder.
  });

router.get("/api/workouts", (req,res)=>{

    ///db.workouts.aggregate([{$sort:{day:-1}},{$limit:3},{$addFields:{totalDuration:{$sum:"$exercises.duration"}}},{$sort:{day:1}}])
    db.Workout
    .aggregate([{$sort:{day:-1}},{$limit:1},{$addFields:{totalDuration:{$sum:"$exercises.duration"}}}])
    .then(dbWorkout => {
        console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

/**db.scores.aggregate( [
   {
     $addFields: {
       totalHomework: { $sum: "$homework" } ,
       totalQuiz: { $sum: "$quiz" }
     }
   },
   {
     $addFields: { totalScore:
       { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
   }
] ) */





router.get("/api/workouts/range", (req,res)=>{
    db.Workout
    .aggregate([{$sort:{day:-1}},{$limit:7},{$addFields:{totalDuration:{$sum:"$exercises.duration"}}},{$sort:{day:1}}])
    .then(dbWorkout => {
        console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})


/*
router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
*/


module.exports = router