const db = require("../models");

module.exports = (app) => {	
    
    app.get("/api/workouts", (req,res) => {
	db.Workout.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;

    db.Workout.update (
        { _id: id },
        { $push: { exercises: req.body }}
    )
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

}