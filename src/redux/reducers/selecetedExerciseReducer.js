//create a reducer to store the selected exercise so you can create a table


//this reducer will return false if no exercise is selected else it will return truthy
//with the selected exercise payload.

const selectedExerciseReducer = (state = {exerciseSelected: false}, action) => {
    
    if (action.type === 'NEW_EXERCISE_SET'){
        return state = {exerciseSelected: true}, action.payload;
    }
    else{
        return state
            //exerciseSelected: false //figure out how to initalize this variable to false.
        
    }

  };

export default selectedExerciseReducer;