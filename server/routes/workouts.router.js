const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


//write post to create a workout id on the loading of the NewWorkoutPage Componenet

router.post('/', (req, res) =>{
    const user_id = req.body.user_id;
    const date = req.body.date;
    const start_time = req.body.start_time;
    const sqlText = `INSERT INTO "workouts" (user_id, date, start_time) VALUES ($1, $2, $3);`

    pool.query(sqlText, [user_id, date, start_time])
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    });
});


module.exports = router;