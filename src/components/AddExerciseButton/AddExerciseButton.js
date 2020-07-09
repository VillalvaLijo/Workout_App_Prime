import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class AddExerciseButton extends Component{

    state ={
        exercise_name: '',
    }
    addExerciseToRedux(){
        console.log("add exercise button pressed");
        //event.preventDefault();
        this.props.dispatch({       
            type: 'POST_EXERCISES',  
            payload: {
                user_id: this.props.reduxStore.user.id,
                exercise: this.state.exercise_name,
            }
        });
        this.setState({
            exercise_name: '',
        });
        
    }

    grabExerciseName = (event) =>{
        console.log("Inside, grabExerciseName, event.target.value", event.target.value);
        this.setState({
            exercise_name: event.target.value
        })

    }

    dispatchNewExerciseToSaga(){
        console.log("Inside dispatchNewExerciseToSaga");
        

    }
    

    render(){
        return(
            <div className= "addExerciseButtonDiv">
                <label htmlFor= "addNewExercise">
                    Add New Exercise:
                    <input
                    type = "text"
                    name="addNewExercise"
                    value = {this.state.exercise_name}
                    onChange={this.grabExerciseName}
                    />
                </label>
                <button type= "button" onClick= {()=>this.addExerciseToRedux()}>
                    Add Exercise
                </button>

            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (AddExerciseButton);