import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//write saga that is going to collect all exercise events that match with the current workout id.

function* postExercise_EventsToDatabase(action){
    
    const workout_id = action.payload.workout_id;
    console.log("inside postExercise_eventsSaga, action.payload.name", action.payload.exercise_name);

    const config = {
        exercise_id: action.payload.exercise_id,
        exercise_name: action.payload.exercise_name,
        user_id: action.payload.user_id,
        workout_id: action.payload.workout_id,
        date: action.payload.date,
        weight: action.payload.weight,
        reps: action.payload.reps
    }
    //console.log("inside postExercises_events saga, config", config);


    try{
        yield axios.post('/api/exercise_events', config);
    }catch(error){
        console.log('error with exercise_events Post', error);
    }

    try {
        const exercise_eventsResponse = yield axios.get(`/api/exercise_events?workout_id=${workout_id}`);

        yield put({type: 'MAKE_EXERCISE_EVENTS_AVAILIBLE', payload: exercise_eventsResponse.data})
    }catch(error){
        console.log('Error with exercise_events get request', error);
    }

}

function* getExercise_EventsFromDatabase(action){
    //console.log("Inside getExercise_events to Server, action.payload");
    const workout_id = action.payload.workout_id;
   console.log("inside Exercises_events GET, workout_id", workout_id);
    try {
        const exercise_eventsResponse = yield axios.get(`/api/exercise_events?workout_id=${workout_id}`);

        yield put({type: 'MAKE_EXERCISE_EVENTS_AVAILIBLE', payload: exercise_eventsResponse.data})
    }catch(error){
        console.log('Error with exercise_events get request', error);
    }
    // try{
    //     yield put({type: 'MAKE_EXERCISE_EVENTS_AVAILIBLE', payload: exercise_eventsResponse.data})
    // }catch(error){
    //     console.log('Error with Exercise_events GET, put, error', error);
    // }

}

function* exercise_eventsSaga() {
    yield takeLatest('GET_EXERCISE_EVENTS', getExercise_EventsFromDatabase);  //action.payload should pass the user_id as passed from NewWorkoutPage component
    yield takeLatest('POST_EXERCISE_EVENTS', postExercise_EventsToDatabase);
}


export default exercise_eventsSaga;
