import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class DisplayOldWorkoutsToDom extends Component {

    displayExercise_Events(){
        console.log("inside displayExerciseEvents, this.props.reduxStore.oldWorkoutExercises", this.props.reduxStore.oldWorkoutsExercises);
         if(this.props.reduxStore.oldWorkoutExercises.length>=1){
             let exerciseArray = this.props.reduxStore.oldWorkoutExercises.map((set) =>
             <div className = "setRowsDisplay" key={set.id}>
                 <tr className = "specificSetRow">
                     <td className = "setExerciseName">{set.exercise_name}</td>
                    <td className = "setExerciseWeight">{set.weight}</td>
                    <td className = "setExerciseReps">{set.reps}</td>
                 </tr>
             </div>)

            return exerciseArray;
         }
    }


    render(){
        return(
            <div className="oldWorkoutDisplay">
            <div>
                Workout Display DATE:
                Workout_ID: {this.props.selectedWorkout_id}
            </div>
            <div className="oldWorkoutExercises">
                <table className="oldWorkoutExercisesTable">
                        <tr className ="oldWorkoutExercisesTable">
                            <th>Exercises</th>
                            <th>Weight</th>
                            <th>Reps</th>
                        </tr>
                        {this.displayExercise_Events()}
                </table>
            </div>
            </div>

        )
    }
    
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (DisplayOldWorkoutsToDom);