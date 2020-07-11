import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './NewExercisePage.css';

//this component should allow a new user to enter in a new exercise anf then 
//this compoent will send a post request to the server so that the new exercise is
//written to the database.

class NewExercisePage extends Component {
    
    state= {
        newExercise: ""
    }

    submitExercise = () =>{
        console.log("submit exercise button clicked");
        console.log("this.state.newExercise", this.state.newExercise);
        this.postExerciseToServer();
    }

    handleInputChangeForNewExercise = (event) =>{
        //console.log(event.target.value);
        this.setState({
            newExercise: event.target.value
        })
    }

    // write post request to server here.
    postExerciseToServer = () => {
        const data ={
            exercise: this.state.newExercise,
            user_id: this.props.user.id
        };
        axios.post('/api/exercises', data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };



   render(){
       return(
           <div className="NewExercisePage">
               <h1>Enter a New Exercise</h1>
               <p>Exercises will be stored so you can record them in workouts
                   and you will be able to track your progress by workout name.
               </p>
               <div className = "newExercise">
                   <label for ="newExericse">
                       Enter New Exericse Here:
                   </label>
               <input name = "newExercise" type = "text" onChange = {this.handleInputChangeForNewExercise}></input>
               </div>
               <button onClick = {this.submitExercise}>Submit</button>
           </div>
           
       )
   } 
}
const mapStateToProps = state => ({
    user: state.user,
  });


export default connect(mapStateToProps)(NewExercisePage);