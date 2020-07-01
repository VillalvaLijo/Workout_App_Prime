const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//POST Exercises to table: "exercises"
router.post('/', (req,res) => {
    const newExercise = req.body.exercise;
    const user_id = req.body.user_id;
    const sqlText = `INSERT INTO exercises (user_id, name) VALUES ($1, $2) RETURNING id`

    pool.query(sqlText, [user_id, newExercise])
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;