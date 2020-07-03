import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//write saga to get user exercise by user id from the server on the opening of 
//new workout page

function* getExercisesFromServer(action){
    //have this function be sent the user id from the new Exercise page.

    //console.log action.payload to show that it has the user ID of the logged in user
    console.log("Inside getExercisesFromServer, action.payload:", action.payload);

    //const user_id = action.payload; //action.payload should contain user_id from the logged in user.
    //write get request here with axios
    //console.log("Inside getExercises")
    try{
        const exercisesResponse = yield axios.get('/api/exercises');//,[action.payload]);//send the get request user_id so the get can request user exercises by id.
        //can't send data with get request consider sorting data client side and solving this problem later.
        //research query string url.

        console.log("inside getExercisesFromServer, exercisesResponse:", exercisesResponse);

        // let user_exercises = [];
        // for (exercise of exercisesResponse){
        //     if (exercisesResponse.user_id === action.payload){
        //         user_exercises.push(exercise);
        //     }
        // }

        yield put({type: 'MAKE_EXERCISES_AVAILIBLE', payload: exercisesResponse.data});
    }catch (error) {
        console.log('Error with exercises get request:', error);
}
}


function* exercisesSaga() {
    yield takeLatest('GET_EXERCISES', getExercisesFromServer);  //action.payload should pass the user_id as passed from NewWorkoutPage component
  }


export default exercisesSaga;