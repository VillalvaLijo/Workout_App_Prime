import React, { Component } from 'react';
import {connect} from 'react-redux';


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

    displayExercise_Events(){
        console.log("inside displayExerciseEvents, this.props.reduxStore.exercise_events", this.props.reduxStore.exercise_events);
         if(this.props.reduxStore.exercise_events.length>=1){
             let exerciseArray = this.props.reduxStore.exercise_events.map((set) =>
             <div className = "setRowsDisplay" key={set.id}>
                 <tr className = "specificSetRow">
                     <td className = "setExerciseName">{set.exercise_name}</td>
                    <td className = "setExerciseWeight">{set.weight}</td>
                    <td className = "setExerciseReps">{set.reps}</td>
                    <td className = "setDeleteButton"><button type = 'button'>Delete Set</button></td>
                 </tr>
             </div>)

            return exerciseArray;
         }
    }
    

    render(){
        return(
            <div className= "exercise_events_table">
                {/* need
                exercise name
                weight used
                reps performed */}
                <table className = "exercise_eventsSetTable">
                    <tr className = "exercise_eventsTableHead">
                        <th>Exercise</th>
                        <th>Weight</th>
                        <th>Reps</th>
                        <th>Delete</th>
                    </tr>
                    {this.displayExercise_Events()}
                </table>


            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (DisplayExercise_EventsToDom);