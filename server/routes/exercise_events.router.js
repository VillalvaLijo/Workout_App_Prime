const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();

router.post('/', (req, res) => {
    const exercise_id = req.body.exercise_id;
    const exercise_name = req.body.exercise_name;
    const user_id = req.body.user_id;
    const workout_id = req.body.workout_id;
    const date= req.body.date;
    const weight = req.body.weight;
    const reps = req.body.reps;

    const sqlText = `INSERT INTO exercise_events (exercise_id, exercise_name, user_id, workout_id, date, weight, reps) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;


    //console.log(req);
    // console.log("req.exercise_id",req.body.exercise_id);
    // console.log("req.user_id",req.body.user_id);
    // console.log("req.workout_id", req.body.workout_id);
    // console.log("req.date", req.body.date);
    // console.log("req.weight", req.body.weight);
    // console.log("req.reps",req.body.reps);

    pool.query(sqlText, [exercise_id, exercise_name, user_id, workout_id, date, weight, reps])
        .then((results) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.get('/', (req,res) =>{
    console.log("inside GET request on exercise_events.router")

    const id = url.parse(req.url, true).query;
    const workout_id = id.workout_id;
    console.log("workout_id,",workout_id);

    queryText = `SELECT * FROM "exercise_events"
    WHERE workout_id = ${workout_id};`

    pool.query(queryText)
    .then((result) =>{
        console.log("this is exercise_events get request, result.rows", result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log("error in exercise_events get", error)
        res.sendStatus(500)
    });
})

//write a delete request to delete sets from the database
router.delete('/', (req, res) =>{
    

    const id = url.parse(req.url, true).query.id;

    console.log("inside Exercise_events Delete Request, id", id);
    //let id = req.params.id
    //console.log("Inside Exercise_events Delete request, id", req.params.id);

    let sqlText = `DELETE FROM "exercise_events" WHERE id = ${id}`;

    pool.query(sqlText)
        .then((result) => {
            console.log("Set Delete function worked");
            res.sendStatus(200);
        })
        .catch((error) =>{
            console.log("error in delete function", error);
            res.sendStatus(500);
        })
})

module.exports = router;