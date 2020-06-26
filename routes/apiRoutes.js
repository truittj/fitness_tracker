const db = require("../models");
const router = require("express").Router();


router.get("/api/workouts",function(req,res){
		db.Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
	});

router.put("/api/workouts/:id", (req, res)=>{
    var id = req.params.id;

    db.Workout.findByIdAndUpdate (
        { _id: id },
        { $push: { exercises: req.body }}
    )
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

    router.get("/api/workouts/range", (req, res) => {
        db.Workout.find().sort({day:-1})
        .then (data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })

    module.exports = router;