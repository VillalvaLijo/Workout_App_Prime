//create this component to create a table when the user selects a exercise, from the drop down menu

import React, { Component } from 'react';
import {connect} from 'react-redux';

class NewExerciseSetTable extends Component {

    state = {


        exercisesArray: [], //push in new exercise set object whenever a new set is created

    }

    componentDidMount(){
        //get data from this.props.reduxStore.selectedExerciseReducer
        console.log("Inside component did mount newExerciseSetTable, this...selectedExerciseReducer", this.props.reduxStore.selectedExerciseReducer);
    }

    handleWeightInput(){
        console.log("inside handle weight input");
    }



    addSet(){
        //create a render function that adds a set as the add set button is pressed
        console.log("inside add set");
    }

    setInput(){
        //conditionally have a user input set.
    }

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