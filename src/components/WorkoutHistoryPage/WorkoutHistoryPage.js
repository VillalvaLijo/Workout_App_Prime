import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import DisplayOldWorkoutsToDom from '../DisplayOldWorkoutsToDom/DisplayOldWorkoutsToDom';

class WorkoutHistoryPage extends Component {

    //write a get request to get all previous workouts for the logged in user_id
    //then display all these workouts as buttons displaying date on the button
    //no, display workout and date as label for each button and allow the user to click 
    // the button in a lowever DIV display the component DisplayOldWorkoutsToDom use flexbox
    // or whatever to split the Dom into a 1/3 2/3 view and display the workouts in a table to the 2/3rds view.


    render(){
        return(
            <div className="workoutHistoryPage">
                <h1>Display all Previous Workouts</h1>
                <div className = "listOfPreviousWorkouts">
                    List Workouts by date here
                </div>
                <div className = "displaySlectedWorkout">
                    <DisplayOldWorkoutsToDom/>
                </div>

            </div>

        )
    }

}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (WorkoutHistoryPage);