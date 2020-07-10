const express = require('express');
const pool = require('../modules/pool');
const url = require('url');

const router = express.Router();

//write get request that selects all workouts by user_id

router.get('/', (req,res) =>{
    console.log("inside GET request on previous_workouts.router")


    //pass the workout_id as a query parameter
    const user_id = url.parse(req.url, true).query.user_id;
    
    console.log("inside previous_workouts GET request user_id,",user_id);

    queryText = `SELECT * FROM "workouts"
    WHERE user_id = ${user_id};`

    pool.query(queryText)
    .then((result) =>{
        console.log("this is previous_workouts get request, result.rows", result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log("error in previous_workouts get", error)
        res.sendStatus(500)
    });
})


module.exports = router;