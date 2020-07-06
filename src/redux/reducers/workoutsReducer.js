const workoutsReducer = (state = {}, action) => {
    
    if (action.type === 'MAKE_WORKOUT_AVAILIBLE'){
        return action.payload
    }
    else{
        return state;
    }

  };

export default workoutsReducer;