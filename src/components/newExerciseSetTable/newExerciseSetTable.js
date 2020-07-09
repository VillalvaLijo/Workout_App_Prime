//create this component to create a table when the user selects a exercise, from the drop down menu

import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class NewExerciseSetTable extends Component {
constructor(props){
    super(props);

    this.state = {
        selectedExerciseId: '',
        previousSets: false,
        weight: '',
        reps: 0,

        exercisesArray: [], //push in new exercise set object whenever a new set is created

    }

    //this.addSet = this.addSet.bind(this);

    //bind this to function sendSetsToDatabase
    this.sendSetsToDatabase = this.sendSetsToDatabase.bind(this);
}
    

    componentDidMount(){
        //get data from this.props.reduxStore.selectedExerciseReducer
        //console.log("Inside component did mount newExerciseSetTable, this...selectedExerciseReducer", this.props.reduxStore.selectedExercise);
        this.setState({
            selectedExerciseId: this.props.reduxStore.selectedExercise.id,
        })
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log("Inside ComponentDidUpdate in newExerciseSetTable");
    //     console.log("inside componentDidUpdate in newExerciseSetTable, prevState", prevState);
    //     console.log("inside componentDidUpdate in newExerciseSetTable, prevProps", prevProps);
    //     if(this.state.selectedExerciseId !== prevProps.reduxStore.selectedExercise.id){
    //         console.log("The Selected Exercise has changed");
    //         this.clearState()
    //         //this.refreshPage() //can brute force use this if you update the database
    //     }

    // }

    componentDidUpdate(prevProps,prevState){
        // if(prevProps.reduxStore.exercise_events.length<this.props.reduxStore.exercise_events.length){
        //     console.log("inside componentDidUpdate for newSetTable, exercise_events", this.props.reduxStore.exercise_events);
        // }
    }

    // refreshPage() {              //can brute force use this if you update the database// but it is going to refresh the workout ID.
    //     window.location.reload(false);
    //   }
    clearState(){
        console.log("inside clearState")
        
        
        // this.setState({
         
        //     exercisesArray: [],
        // })
    }

    handleWeightInput= (event)=>{
        console.log("inside handle weight input, event.target.value", event.target.value);
        this.setState({
            weight: event.target.value
        });
    }

    handleRepInput = (event)=>{
        console.log("inside handle rep input, event.target.value", event.target.value);
        this.setState({
            reps: event.target.value,
        });
    }



    //addSet(){
        //create a render function that adds a set as the add set button is pressed
        //add workout_id to exercise event.

        
        //console.log("inside add set");
        //let date = Date()
        //console.log("date", date);
        //console.log("workout id reduxStore", this.props.reduxStore.workout);
        //console.log("workout_id", this.props.reduxStore.workout.id);

        //object properties for exercise event
        //exercise_id, user_id, workout_id, date, weight, reps
        //exercise_id is avaible at this.props.reduxStore.selectedExercise.id
        // const newSet ={
        //     exercise_id: this.props.reduxStore.selectedExercise.id,
        //     user_id: this.props.reduxStore.user.id,
        //     workout_id: this.props.reduxStore.workout.id,
        //     date: date,
        //     weight: this.state.weight,
        //     reps: this.state.reps,
        // }



        // this.setState({
        //     previousSets: true,
        //     exerciseArray: this.state.exercisesArray.push(newSet),
        //     //kitty: this.state.exercisesArray.push(newSet),
        // });

        //this.sendSetsToDatabase()
        
        //this.setInput();
        //change the previousSets boolean to true. 
    //}

    //setInput(){
        //conditionally have a user input set.
        //dispatch exercise event to database
        //console.log("inside Set Input in newExerciseSetTable, exercisesArray", this.state.exercisesArray);
        //console.log("typeof exercisesArray", typeof(this.state.exercisesArray));
        //console.log("this.props.reduxStore.selectedExercise",this.props.reduxStore.selectedExercise);


    //}

    sendSetsToDatabase(){
        console.log("Sending Sets to data base");
        //console.log("this.state.exercisesArray[(this.state.exerciseArray.length)-1].exercise_id",this.state.exercisesArray[(this.state.exercisesArray.length)-1].exercise_id);
        //console.log("this.props.reduxStore.selectedExercise",this.props.reduxStore.selectedExercise);

        let date = Date();



        // const data ={
        //     exercise_id: this.props.reduxStore.selectedExercise.id,
        //     user_id: this.props.reduxStore.user.id,
        //     workout_id: this.props.reduxStore.workout.id,
        //     date: date,
        //     weight: this.state.weight,
        //     reps: this.state.reps,
        // };

        //console.log("inside sendSetsToDatabase, data", data);
        // axios.post('/api/exercise_events', data)
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
        this.props.dispatch({
            type: 'POST_EXERCISE_EVENTS',
            payload: {
            exercise_id: this.props.reduxStore.selectedExercise.id,
            exercise_name: this.props.reduxStore.selectedExercise.name,
            user_id: this.props.reduxStore.user.id,
            workout_id: this.props.reduxStore.workout.id,
            date: date,
            weight: this.state.weight,
            reps: this.state.reps,
            }
        })
        //this.getExerciseEventsFromServer();
        //this.exercise_eventsChecker();

        //clear input fields with setState
        this.setState({
            weight: '',
            reps: '',
        })
    }

    // getExerciseEventsFromServer(){
    //     this.props.dispatch({
    //         type: 'GET_EXERCISE_EVENTS',
    //         payload: {
    //             workout_id: this.props.reduxStore.workout.id,
    //         }
    //     })
    //     this.exercise_eventsChecker()
    // }

    // exercise_eventsChecker(){
    //     console.log("Inside Exercise_events Checker, this.props.reduxStore.exercise_events", this.props.reduxStore.exercise_events);

    //     //this checks before the exercise_eventsReducer is called by dispatch
    // }

    
  

    // renderPreviousSet(){
    //     if(this.state.previousSets===true){
    //     if(this.state.exercisesArray.length != 0){
    //     //if((this.state.exercisesArray[(this.state.exerciseArray.length)-1].exercise_id)===this.props.reduxStore.selectedExercise.id)
    //     //{
    //         {
    //         let taco = this.state.exercisesArray.map((set)=>
    //         <tr>
    //             <td>{set.weight}</td>
    //             <td>{set.reps}</td>
    //         </tr>)
    //         return taco;
            
            
    //     }
   // }
    // else if((this.state.exerciseArray[(this.state.exercisesArray.length)-1].exercise_id)!== this.props.reduxStore.selectedExercise.id){
    //     this.sendSetsToDatabase();
    // }
//     }
// }
// }

    //conditionally render the sets that were input before current set input, do this with
    //a boolean.
    render(){
        return(
            <div className ="newExerciseSetTable">
                <h3>{this.props.reduxStore.selectedExercise.name}</h3>
                <table className="newExerciseSetTableTable">
                    <tr className="newExerciseSetTableHead">
                        {/* <th>{this.props.reduxStore.selectedExercise.name}</th> */}
                        <th>Weight</th>
                        <th>Reps</th>
                    </tr>
                    {/* conditionally render table rows of exercises completed here */}
                    {/* {this.state.previousSets
                        ?
                        // map through exercises array to render it to the page.
                        {let exercisesArray = this.state.exerciseArray.map((set) =>
                        <tr>
                            <td>{set.weight}</td>
                            <td>{set.reps}</td>
                        </tr>)} */}
                        {/* {this.renderPreviousSet()} */}
                        {/* <tr>
                            <td>Previous</td>
                            <td>Sets</td>
                        </tr>
                        : <div className= "emptyDiv"></div>
                        } */}
                    <tr className="newExerciseSetTableInputRow">
                        {/* <td>{this.props.reduxStore.selectedExercise.</td> */}
                        <td><input
                                type= "text"
                                name="weight"
                                value = {this.state.weight}
                                onChange={this.handleWeightInput}
                            />
                        </td>
                        <td><input
                                type="number"
                                name="reps"
                                value={this.state.reps}
                                onChange={this.handleRepInput}
                            />
                        </td>
                    </tr>

                </table>
                <button 
                    className="addSet"
                    onClick= {this.sendSetsToDatabase}
                >
                    Add Set
                </button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (NewExerciseSetTable);