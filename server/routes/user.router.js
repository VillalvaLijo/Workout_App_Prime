const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

//import 'url' from express in order to be able to acceses
//query params in put request
const url = require('url');


const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted

//update this so that it registers the new user with all the other attributes from the users profile
//height, weight, email, username and password.
//re-write the sql query as well.
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  // const email = req.body.email;
  // const height = req.body.height;
  // const weight = req.body.weight;

  //console.log req.boy to get an understanding of what is being passed and why it
  //isn't being sent to the database

  console.log("inside post, /register, req.body:",req.body);

  //sqlQuery just for username and password for provided registerpage
  const sqlQuery= 'INSERT INTO "user" (username, password) VALUES($1, $2) RETURNING id';

  //const queryText = 'INSERT INTO "user" (username, password, email, height, weight) VALUES ($1, $2, $3, $4, $5) RETURNING id';  //?RID
  //pool.query(queryText, [username, password, email, height, weight])
  pool.query(sqlQuery, [username, password])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

//write PUT request here to take email from the user input on Eit Profile Page
router.put('/user_email', (req, res) =>{
  console.log("Inside user email put request: req.body", req.body);
  //grab query param of user id for the database entry
  const id = url.parse(req.url, true).query.id;

  //acceses req.body to extract usable parameters
  const user_email = req.body.email;

  console.log("Inside Email put request, query param, id:", id);

  const sqlQuery = `UPDATE "user" SET email = '${user_email}' WHERE id = ${id};`;

  pool.query(sqlQuery).then((results) =>{
    console.log("After user email put request, results:", results);
    res.sendStatus( 201 );
  }).catch((error) => {
    console.log("error with user email put request:", error);
    res.sendStatus(500);
  })
})

module.exports = router;
