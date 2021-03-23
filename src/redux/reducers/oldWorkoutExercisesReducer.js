//write a reducer to write all the old workout
//exercise events to the redux Store.

const oldWorkoutExercisesReducerReducer = (state = {}, action)=>{

    if (action.type ==='MAKE_PREVIOUS_WORKOUT_EXERCISES_AVAILIBLE'){
        return action.payload
    }
    else{
        return state;
    }
};

export default oldWorkoutExercisesReducerReducer;