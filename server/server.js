
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
//include routes from your routes to your database tables
const exerciseRouter = require('./routes/exercises.router');
const workoutsRouter = require('./routes/workouts.router');
const exercise_eventsRouter = require('./routes/exercise_events.router');
const previous_workoutsRouter = require('./routes/previous_workouts.router');
const oldWorkoutExercisesRouter = require('./routes/oldWorkoutExercises.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
//create routes for all your routers to your database tables
app.use('/api/exercises', exerciseRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/exercise_events', exercise_eventsRouter);
app.use('/api/previous_workouts', previous_workoutsRouter);
app.use('/api/oldWorkoutExercises', oldWorkoutExercisesRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
