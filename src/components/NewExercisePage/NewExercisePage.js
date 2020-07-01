import React from 'react';
import {Component} from 'react';

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
    }

    handleInputChangeForNewExercise = (event) =>{
        //console.log(event.target.value);
        this.setState({
            newExercise: event.target.value
        })
    }


   render(){
       return(
           <div>
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

export default NewExercisePage;