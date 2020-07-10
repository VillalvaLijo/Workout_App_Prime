import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LogOutButton from '../LogOutButton/LogOutButton';


class UserProfilePage extends Component{
    //establish a new page that the user navigates through the app in 

    //create a state for this page so that you can pass it too the workout dispatch
    // state = {

    // }
    //not sure if I need this.

    navToWorkoutPage = () =>{
        //navigate to the new workout page so the user can enter in a new workout.
        //create new workout event here by calling a dispatch to the workout saga
        this.props.dispatch({
            type: 'POST_WORKOUT',
            payload: {
                user_id: this.props.reduxStore.user.id,
                date: Date(),
                start_time: Date(),
            }
        })

        this.props.dispatch({
            type: 'CLEAR_SELECTED_EXERCISE'
        });


        console.log("Inside navToWorkoutPage function, New Workout Button Clicked")
        this.props.history.push("/newworkout");


    }

    navToNewExercisePage = () => {
        //Navigate to the new exercise page where the user can add a new exercise to their database of exercises.
        console.log("New Workout Button pressed");

        this.props.history.push("/addnewexercise");
    }

    navToEditProfilePage = () => {
        //navigation to the edit profile page where we will use put to edit profile.
        this.props.history.push("/editprofile");
    }

    navToDisplayPreviousWorkout = () =>{
        this.props.history.push("/displaypreviousworkouts");
    }

    navToStatistics = () => {
        this.props.history.push("/statistics");
    }


    render(){
        return(
            <div>
                <h1>Welcome Back Username</h1>
                <div><button onClick={this.navToWorkoutPage}>New Workout</button></div>
                <div><button onClick = {this.navToNewExercisePage}>Add New Exercises</button></div>
                <div><button onClick = {this.navToEditProfilePage}>Edit Profile</button></div>
                <div><button onClick = {this.navToDisplayPreviousWorkout}>View Workout History</button></div>
                <div><button onClick = {this.navToStatistics}>View Your Data</button></div>
                <LogOutButton className="log-in" />
            </div>
        )

    }

}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (UserProfilePage);


