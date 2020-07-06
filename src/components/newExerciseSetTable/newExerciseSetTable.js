//create this component to create a table when the user selects a exercise, from the drop down menu

import React, { Component } from 'react';
import {connect} from 'react-redux';

class NewExerciseSetTable extends Component {
constructor(props){
    super(props);

    this.state = {
        previousSets: false,
        weight: '',
        reps: 0,

        exercisesArray: [], //push in new exercise set object whenever a new set is created

    }

    this.addSet = this.addSet.bind(this);
}
    

    componentDidMount(){
        //get data from this.props.reduxStore.selectedExerciseReducer
        console.log("Inside component did mount newExerciseSetTable, this...selectedExerciseReducer", this.props.reduxStore.selectedExercise);
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



    addSet(){
        //create a render function that adds a set as the add set button is pressed
        //add workout_id to exercise event.


        console.log("inside add set");
        let date = Date()
        console.log("date", date);
        console.log("workout id reduxStore", this.props.reduxStore.workout);
        console.log("workout_id", this.props.reduxStore.workout.id);

        //object properties for exercise event
        //exercise_id, user_id, workout_id, date, weight, reps
        //exercise_id is avaible at this.props.reduxStore.selectedExercise.id
        const newSet ={
            exercise_id: this.props.reduxStore.selectedExercise.id,
            user_id: this.props.reduxStore.user.id,
            workout_id: this.props.reduxStore.workout.id,
            date: date,
            weight: this.state.weight,
            reps: this.state.reps,
        }

        this.setState({
            previousSets: true,
            exercisesArray: this.state.exercisesArray.push(newSet),
        });
        
        this.setInput();
        //change the previousSets boolean to true. 
    }

    setInput(){
        //conditionally have a user input set.
        //dispatch exercise event to database
        console.log("inside Set Input in newExerciseSetTable, exercisesArray", this.state.exercisesArray);
    }

    renderPreviousSet(){
        if(this.state.previousSets===true){
            let exerciseArray = this.state.exercisesArray.map((set)=>
            <tr>
                <td>{set.weight}</td>
                <td>{set.reps}</td>
            </tr>)
            return exerciseArray;
            
            
        }
    }

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
                        {this.renderPreviousSet()}
                        <tr>
                            <td>Previous</td>
                            <td>Sets</td>
                        </tr>
                        : <div className= "emptyDiv"></div>
                        }
                    <tr className="newExerciseSetTableInputRow">
                        {/* <td>{this.props.reduxStore.selectedExercise.</td> */}
                        <td><input
                                type= "text"
                                name="weight"
                                onChange={this.handleWeightInput}
                            />
                        </td>
                        <td><input
                                type="number"
                                name="reps"
                                onChange={this.handleRepInput}
                            />
                        </td>
                    </tr>

                </table>
                <button 
                    className="addSet"
                    onClick= {this.addSet}
                >
                    Add Set
                </button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (NewExerciseSetTable);