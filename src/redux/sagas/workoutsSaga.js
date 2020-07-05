import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//write POST request to post workout event to the database

function* postWorkoutToDatabase(action){

    console.log("Inside postWorkoutToDatabase, action.payload:", action.payload);
    //need action.payload to contain, user_id, date, and start_time.
    config = {
        user_id: action.payload.user_id,
        date: action.payload.date,
        start_time: action.payload.start_time,
    }


    try{
        yield axios.post('/api/exercises', config);
        
    }catch (error) {
        console.log('Error with Workouts Post request:', error);
}
}

function* workoutsSaga() {
    yield takeLatest('POST_WORKOUT', postWorkoutToDatabase);  //send POST request to database
  }


export default workoutsSaga;