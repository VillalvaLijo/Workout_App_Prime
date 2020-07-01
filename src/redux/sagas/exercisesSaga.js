import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//write saga to get user exercise by user id from the server on the opening of 
//new workout page

function* getExercisesFromserver(action){
    //have this function be sent the user id from the new Exercise page.
    const user_id = 1;
    //write get request here with axios
    try{
        const exercisesResponse = yield axios.get('/api/exercises', user_id);//send the get request user_id so the get can request user exercises by id.

        yield put({type: 'MAKE_EXERCISES_AVAILIBLE', payload: exercisesResponse.data});
    }catch (error) {
        console.log('Error with exercises get request:', error);
}
}


function* exercisesSaga() {
    yield takeLatest('GET_EXERCISES', getExercisesFromserver);
  }


export default exercisesSaga;