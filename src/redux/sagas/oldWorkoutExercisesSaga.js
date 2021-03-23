import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//really just need to write a get and then a put to 
// a Reducer then pull then up in redux store.
//write a dispatch with workout_id passed to this saga, 
//put it in compoentDidMount then run another request again on 
//compoenetDidUpdate

function* getOldWorkoutExercises(action){
    const workout_id = action.payload.workout_id;

    try{
        const exercise_eventsResponse = yield axios.get(`/api/oldWorkoutExercises?workout_id=${workout_id}`);
        console.log("inside GetOldWorkoutExercises, exercise_eventsResponse:",exercise_eventsResponse);
        yield put({type: 'MAKE_PREVIOUS_WORKOUT_EXERCISES_AVAILIBLE',payload: exercise_eventsResponse.data});
    }catch(error){
        console.log('Error with getSelectedPreviousWorkoutExercise_Events get request', error);
    }

}

function* oldWorkoutExercises(){
    yield takeLatest('GET_PREVIOUS_WORKOUT_EXERCISE_EVENTS', getOldWorkoutExercises);
}

export default oldWorkoutExercises;
