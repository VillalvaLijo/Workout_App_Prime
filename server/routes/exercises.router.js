const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

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

//write GET request to get user exercies
//figure out how to select user exercise from only the user id that is given. 

//use 
//SELECT * FROM "exercises" WHERE "user_id" = 'user id';
//going to have to pass the get request user id.

router.get('/', (req,res) => {
   // console.log("inside GET request on exercises.router, req.body:", req.body);
    const id = url.parse(req.url, true).query
    const user_id = parseInt(id.user_id)
    console.log("Inside exercises GET request, user_id", user_id);

    queryText = `SELECT * FROM "exercises" WHERE user_id = ${user_id}`;

    pool.query(queryText).then((result) => {
        console.log("results.rows", result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log("error in exercises GET", error)
        res.sendStatus(500)
    });
})

module.exports = router;