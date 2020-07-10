//create a reducer that sends all exercise events that match the current workout id
//to the reducer

const exercise_eventsReducer = (state= {exercise_events: [] }, action)=>{

    //console.log("inside exercise_events reducer, action.payload", action.payload);

    if (action.type === 'MAKE_EXERCISE_EVENTS_AVAILIBLE'){
        return action.payload
    }
    else{
        return state;
    }
};

export default exercise_eventsReducer;