const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();

//write GET request that selects all exercise_events by workout_id

router.get('/', (req, res) =>{

    console.log("inside GET request in previousSelctedWorkouts router ");

    workout_id = url.parse(req.url, true).query.workout_id;
    console.log("Inside oldWorkoutExercises workout_id", workout_id);

    queryText = `SELECT * FROM "exercise_events"
    WHERE workout_id = ${workout_id};`

    pool.query(queryText)
    .then((result) => {
        console.log("this is previous_workouts GET request, result.rows", result.rows)
        res.send(result.rows)
    }).catch((error) => {
        console.log("error in exercise_events GET", error);
        res.sendStatus(500);
    })
})

module.exports = router;