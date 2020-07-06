import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//write POST request to post workout event to the database

function* postWorkoutToDatabase(action){

    console.log("Inside postWorkoutToDatabase, action.payload:", action.payload);
    //need action.payload to contain, user_id, date, and start_time.
    const config = {
        user_id: action.payload.user_id,
        date: action.payload.date,
        start_time: action.payload.start_time,
    }


    try{
        yield axios.post('/api/workouts', config);
        
    }catch (error) {
        console.log('Error with Workouts Post request:', error);
}
    try{
        const date_wo = action.payload.date;
        console.log("inside Workout Saga, date",date_wo);
        const workoutsGetResponse = yield axios.get(`/api/workouts?date=${date_wo}`);//, param = { date: action.payload.data});
        //const workoutsGetResponse = yield axios.get('/api/workouts', date_wo);
        //write this get request to get the ID of the workout created in the database.

        //write put to send to workout reducer
        yield put({type: 'MAKE_WORKOUT_AVAILIBLE', payload: workoutsGetResponse.data[0]});
    }catch(error){
        console.log('Error with Workouts Get request');
    }
}

function* workoutsSaga() {
    yield takeLatest('POST_WORKOUT', postWorkoutToDatabase);  //send POST request to database
  }


export default workoutsSaga;