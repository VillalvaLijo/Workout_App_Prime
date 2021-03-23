import React, { Component } from 'react';
import {connect} from 'react-redux';
import './DisplayExercise_EventsToDom.css';


class DisplayExercise_EventsToDom extends Component{


    componentDidMount(){
        //write a get request
        console.log("inside componentDidMount in DisplayExercise_EventsToDom")
        //console.log("this.props.reduxStore.exercise_events", this.props.reduxStore.exercise_events);

        // this.props.dispatch({
        //     type: 'GET_EXERCISE_EVENTS',
        //         payload: {
        //             workout_id: this.props.reduxStore.workout.id,
        //         }
        //     })

    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.reduxStore.exercise_events.length<this.props.reduxStore.exercise_events.length){
            this.displayExercise_Events()
        }
    }

    deleteExercise_Event(selectedExercise_id){
        console.log("inside deleteExercise_Event");
        //console.log("this.props.reduxStore.exercise_events.id", this.props.reduxStore.exercise_events.id)
        console.log("selectedExercise_id", selectedExercise_id);
        this.props.dispatch({
            type: 'DELETE_SET',
            payload: {
                id: selectedExercise_id,
                workout_id: this.props.reduxStore.workout.id,
            }
        })
    }

    displayExercise_Events(){
        console.log("inside displayExerciseEvents, this.props.reduxStore.exercise_events", this.props.reduxStore.exercise_events);
         if(this.props.reduxStore.exercise_events.length>=1){
             let exerciseArray = this.props.reduxStore.exercise_events.map((set) =>
             
                 <tr className = "specificSetRow" key={set.id}>
                     <td className = "setExerciseName" colspan="1">{set.exercise_name}</td>
                    <td className = "setExerciseWeight" colspan="1">{set.weight}</td>
                    <td className = "setExerciseReps" colspan = "1">{set.reps}</td>
                    <td className = "setDeleteButton" colspan ="1"><button type = 'button' onClick = {()=>this.deleteExercise_Event(set.id)}>Delete Set</button></td>
                 </tr>
             )

            return (
                <table className = "exercise_eventsSetTable">
                    <tr className = "exercise_eventsTableHead">
                        <th className = "exercisesColumn"colSpan="1">Exercise</th>
                        <th className="weightColumn"colSpan="1">Weight</th>
                        <th className="repsColumn" colSpan="1">Reps</th>
                        <th className="deleteColumn" colSpan="1">Delete</th>
                    </tr>
                    {exerciseArray}
                </table> 
                );
         }
    }
    

    render(){
        return(
            <div className= "exercise_events_table">
                {/* need
                exercise name
                weight used
                reps performed */}
                <h2>
                    Your Exercises:
                </h2>
                {this.displayExercise_Events()}

            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (DisplayExercise_EventsToDom);