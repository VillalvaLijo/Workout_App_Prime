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

    componentDidMount(){
        //run a dispatch to the previous_workoutsSaga to
        //get all the previous workouts from the logged in users id
        
        //try running the dispatch on the login function so that 
        //your component won't take more time to load then the DOM does

        //just run it here and see what happens

        this.props.dispatch({
            type: 'GET_PREVIOUS_WORKOUTS',
            payload: {
                user_id: this.props.reduxStore.user.id,
            }
        });

    }

    displayAllPreviousWorkoutsToDom(){
        //console.log("Inside displayeAllPreviousWorkoutsToDom, this.props...previousWorkouts", this.props.reduxStore.previous_workouts);
        if(this.props.reduxStore.previous_workouts.length>=1){

        }
        else{
            return(<div className="noWorkoutHistoryConditionalRender">
                You don't have any saved Workouts, Go Workout!
            </div>)
        }
    }

    //going to nee to write a component did update becuase DOM is 
    //rendering before dispatch GET request hits server.
    //call render again inside componentDidUpdate
    componentDidUpdate(prevProps, prevState){
        if(prevProps.previous_workouts !== this.props.reduxStore.previous_workouts){
            console.log("inside component did update, if state ment is true, recall render");
            this.render();
        }
    }


    render(){
        return(
            <div className="workoutHistoryPage">
                <h1>Display all Previous Workouts</h1>
                <div className = "listOfPreviousWorkouts">
                    List Workouts by date here
                    {this.displayAllPreviousWorkoutsToDom()}
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