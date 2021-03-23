import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPrevious_WorkoutsFromDatabase(action){
    //action.payload will contain user_id
    console.log("inside getPrevious_WorkoutsFromDatabase, action.payload", action.payload);
    const user_id = action.payload.user_id;
    //not running this console.log for some reason.
    //console.log("inside getPrevious_WorkoutsFromDatabase, user_id", user_id);

    try{
        const previous_workoutsResponse = yield axios.get(`api/previous_workouts?user_id=${user_id}`);

        yield put({type: 'MAKE_PREVIOUS_WORKOUTS_AVAILIBLE', payload: previous_workoutsResponse.data})
    }catch(error){
        console.log('error with getPrevious_workouts GET request');
    }
}

function* previous_workoutsSaga(){
    yield takeLatest('GET_PREVIOUS_WORKOUTS', getPrevious_WorkoutsFromDatabase);
}

export default previous_workoutsSaga;