//write a reducer to write all previous workouts into 
//redux store.

const previous_workoutsReducer = (state = {}, action)=>{

    if (action.type ==='MAKE_USER_WORKOUT_HISTORY_AVAILIBLE'){
        return action.payload
    }
    else{
        return state;
    }
};

export default previous_workoutsReducer;