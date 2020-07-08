//create a reducer for user exercises so they are availible in redux store for the new workout page

const exercisesReducer = (state = {}, action) => {
    console.log("Inside exercisesReducer, action.payload", action.payload);
    if (action.type === 'MAKE_EXERCISES_AVAILIBLE'){
        return action.payload
    }
    else{
        return state;
    }

  };

export default exercisesReducer;