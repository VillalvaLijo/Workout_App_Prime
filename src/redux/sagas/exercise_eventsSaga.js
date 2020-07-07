import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//write saga that is going to collect all exercise events that match with the current workout id.

function* getExercise_EventsFromDatabase(action){
    console.log("Inside sendExercise_events to Server, action.payload");
    workoutDate = action.payload.date
    try {
        const exercise_eventsResponse = yield axios.get('/api/exercise_events');

    }

}

function* exercise_eventsSaga() {
    yield takeLatest('GET_EXERCISES', getExercise_EventsFromDatabase);  //action.payload should pass the user_id as passed from NewWorkoutPage component
  }


export default exercise_eventsSaga;
