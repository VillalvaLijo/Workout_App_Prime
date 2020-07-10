import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import ExercisesDropDownMenu from '../ExercisesDropDownMenu/ExercisesDropDownMenu';
import NewExerciseSetTable from '../newExerciseSetTable/newExerciseSetTable';
import DisplayExercise_EventsToDom from '../displayExercise_EventsToDom/DisplayExercise_EventsToDom';
import AddExerciseButton from '../AddExerciseButton/AddExerciseButton';


class NewWorkoutPage extends Component {

    state = {
        exercisesArray: []
    }

    //figure out how you will call a one-time post on the calling of this component.
    componentDidMount(){
        //post user_id, date, and start_time to database to create a workout ID.
        console.log("On NewWorkoutPage, component did mount");
        const user_id = this.props.reduxStore.user.id;
        const workoutDate = Date();
        const workoutStartTime = Date();
        console.log("on NewWorkoutPage, componenet did mount: ", workoutDate);
        console.log("Inside component did mount NeWorkoutPage, this.props.reduxStore.workout.id");

        // this.props.dispatch({
        //     type: 'POST_WORKOUT',
        //     payload: {
        //         user_id: user_id,
        //         date: workoutDate,
        //         start_time: workoutStartTime,
        //     }
        // })

        //this should clear redux state to only exercise_events that
        //have the current workout_id
        this.props.dispatch({
            type: 'GET_EXERCISE_EVENTS',
            payload: {
                workout_id: this.props.reduxStore.workout.id, //date, check on this
            }
        });
        }

    // componentDidUpdate(prevProps, prevState){
    //     console.log("inside compoenDidUpdate NewWorkoutPage, prevProps", prevProps);
    //     console.log("inside componentDidUpdate in NewWorkoutPage", this.props.reduxStore.selectedExercise);
    //     // if( prevProps.reduxStore.selectedExercise.id !== this.props.reduxStore.selectedExecise.id){
    //     //     this.renderSetTable();
    //     // }
    //     this.props.dispatch({
    //         type: 'GET_EXERCISE_EVENTS',
    //         payload: {
    //             workout_id: this.props.reduxStore.workout.id,
    //         }
    //     })
    //     console.log("this.props.reduxStore.exercise_events");
    // }
    componentDidUpdate(prevProps, prevState){
        console.log("inside componetDidUpdate in NewWorkoutPage, this.props.reduxStore.workout.id", this.props.reduxStore.workout.id);
        if(prevProps != this.props){
            console.log("inside if statement, component did update for NewWorkoutPage");
       
            this.props.dispatch({
                type: 'GET_EXERCISE_EVENTS',
                payload: {
                    workout_id: this.props.reduxStore.workout.id, //date, check on this
                }
            });
    }
    }


    // renderSetTable(){
    //     console.log("renderSetTable called.")
    // }
    // recordExerciseSet = () => {   
    //     // = (event) => introduce this if you have to.    
    //     //event.preventDefault();

    //     console.log("Inside recordExerciseSet, this.props.reduxStore.user.id:", this.props.reduxStore.user.id);
    
        
    //       this.props.dispatch({       
    //         type: 'GET_EXERCISES',          // dispatch to saga with user_id, Make sure you can 
    //         payload: {                      //perform a dispatch to a saga.
    //           user_id: this.props.reduxStore.user.id,
    //         }
    //     });  
    //     //console.log the get request response so you can see that you have accesses to the
    //     //exercises based off user ID
    //     //console.log("Inside recordExerciseSet, exercises:", this.props.reduxStore.exercises);
    //       this.showExercises()
    //   } // end record Exercise set

      showExercises = () => {
          console.log("Inside showExercises, this.props.reduxStore.exercises", this.props.reduxStore.exercises);
      }

      

   render(){
       return(
           <div>
           <h1>New Workout Goes Here</h1>
           <DisplayExercise_EventsToDom/>
           {/* <button onClick={this.recordExerciseSet}>New Exercise Set</button> */}
           <ExercisesDropDownMenu/>
           <AddExerciseButton/>

           {this.props.reduxStore.selectedExercise.exerciseSelected //select for exercises selected in the reducer, have exercises selected be a boolean.
                        ? <NewExerciseSetTable/>
                        : <div>No Exercise Selected</div>
                        }

           {/* <newExerciseSetTable/> */}

           {/* figure out a drop down menu here */}
           </div>

       )
   } 
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (NewWorkoutPage);