const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
    const exercise_id = req.body.exercise_id;
    const user_id = req.body.user_id;
    const workout_id = req.body.workout_id;
    const date= req.body.date;
    const weight = req.body.weight;
    const reps = req.body.reps;

    const sqlText = `INSERT INTO exercise_events (exercise_id, user_id, workout_id, date, weight, reps) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;


    //console.log(req);
    // console.log("req.exercise_id",req.body.exercise_id);
    // console.log("req.user_id",req.body.user_id);
    // console.log("req.workout_id", req.body.workout_id);
    // console.log("req.date", req.body.date);
    // console.log("req.weight", req.body.weight);
    // console.log("req.reps",req.body.reps);

    pool.query(sqlText, [exercise_id, user_id, workout_id, date, weight, reps])
        .then((results) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;