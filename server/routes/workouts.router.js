const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();


//write post to create a workout id on the loading of the NewWorkoutPage Componenet

router.post('/', (req, res) =>{
    const user_id = req.body.user_id;
    const date = req.body.date;
    const start_time = req.body.start_time;
    const sqlText = `INSERT INTO "workouts" (user_id, date, start_time) VALUES ($1, $2, $3);`

    console.log("Inside Workouts.router, req.body:",req.body);

    pool.query(sqlText, [user_id, date, start_time])
    .then((result) => {
        //console.log("inside workout post, res", res);
        res.sendStatus(201)
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    });
});

//write get request to pass workout id to the client side
//only select the workout id that was just created.
router.get('/', (req, res) => {
    //const date = req.date;
    const date = url.parse(req.url, true).query; //reference error, url not defined.
    console.log("date:", date);
    const datestring = date.date
    //const datestring = `'${date}'`;

    //select workout ID by matching string date input from url to date on the database

    queryText = `SELECT * FROM "workouts"
    WHERE date = '${datestring}';`

    // queryText = `SELECT * FROM "workouts"
    //  WHERE date = '$1';`

    pool.query(queryText) //, [datestring])
    .then((result) => {
        console.log("this is workouts get request, result.rows:",result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log("error in WORKOUT GET", error)
        res.sendStatus(500)
    });
})



module.exports = router;