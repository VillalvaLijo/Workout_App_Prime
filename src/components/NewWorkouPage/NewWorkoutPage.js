import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import ExercisesDropDownMenu from '../ExercisesDropDownMenu/ExercisesDropDownMenu';


class NewWorkoutPage extends Component {

    recordExerciseSet = () => {   
        // = (event) => introduce this if you have to.    
        //event.preventDefault();

        console.log("Inside recordExerciseSet, this.props.reduxStore.user.id:", this.props.reduxStore.user.id);
    
        
          this.props.dispatch({       
            type: 'GET_EXERCISES',          // dispatch to saga with user_id, Make sure you can 
            payload: {                      //perform a dispatch to a saga.
              user_id: this.props.reduxStore.user.id,
            }
        });  
        //console.log the get request response so you can see that you have accesses to the
        //exercises based off user ID
        //console.log("Inside recordExerciseSet, exercises:", this.props.reduxStore.exercises);
          this.showExercises()
      } // end record Exercise set

      showExercises = () => {
          console.log("Inside showExercises, this.props.reduxStore.exercises", this.props.reduxStore.exercises);
      }

      

   render(){
       return(
           <div>
           <h1>New Workout Goes Here</h1>
           <button onClick={this.recordExerciseSet}>New Exercise Set</button>
           <ExercisesDropDownMenu/>

           {/* figure out a drop down menu here */}
           </div>

       )
   } 
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (NewWorkoutPage);