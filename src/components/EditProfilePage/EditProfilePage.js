import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import './EditProfilePage.css';


class EditProfilePage extends Component {

    //on this form list the user's current email address height and weight, then make it editable and update 
    //the DOM with the new inputs

    //come back, other things you can add are age, 

    state = {
        email: '',
        height: '',
        weight: '',
    }

    componentDidMount(){
        console.log("inside componentDidMount in Edit Profile Page, this.props.reduxStore.user", this.props.reduxStore.user);
    }

    // componentDidUpdate(){
    //    console.log("inside component did update, Edit profile page, this.state:",this.state);
    // }

    addEmailToDatabase(){
        console.log("add email to database button pressed");

        //write dispatch to send email to the saga
        this.props.dispatch({
            type: 'PUT_USER_EMAIL_TO_SERVER',
            payload: {
                email: this.state.email,
                id: this.props.reduxStore.user.id,
            }
        });

        //clear local state and thus input field on DOM
        this.setState({
            email: "",
        });
    }

    addHeightToDatabase(){
        console.log("add height to database button pressed");

        //write dispatch to send user height to the saga
        this.props.dispatch({
            type: 'PUT_USER_HEIGHT_TO_SERVER',
            payload: {
                height: this.state.height,
                id: this.props.reduxStore.user.id,
            }
        });

        //clear local state and thus clear input
        this.setState({
            height: "",
        });
    }

    addWeightToDatabase(){
        console.log("add weight to database button pressed");

        //write dispatch to send user height to the saga
        this.props.dispatch({
            type: 'PUT_USER_WEIGHT_TO_SERVER',
            payload: {
                weight: this.state.weight,
                id: this.props.reduxStore.user.id,
            }
        });

        //clear local state and thus clear input
        this.setState({
            weight: "",
        });
    }

    handleInputChangeFor = propertyName => (event) =>{
        this.setState({
            [propertyName]: event.target.value,
        });
    }

   render(){
       return(
           <div className="editProfileDiv">
           <div className = "headerProfileEditDiv">
           {/* <h1>User will be able to edit their profile page here</h1> */}
           <h1> Welcome to Your Profile {this.props.reduxStore.user.username}</h1>
           <h3>Update your profile so we can use data to better track your workouts</h3>
           <p>Here at Your Workout Tracker we are absolutly dedicated to using real data to take your fitness to the next level. 
               The more we know about you the better we can help you kill it in the gym. Enter your data if your ready to take your workouts to the next level. 
               (privacy policy)
           </p>
           </div>
           <div className="updateUserProfileFormDiv">
               <div className="updateEmailDiv">
                   <p>Update your email so we can send your workouts and stats directly to your inbox</p>
                   <div className= "currentEmail">
                       Current Email: {this.props.reduxStore.user.email}
                   </div>
                   <label htmlFor="email">
                       Update Email:
                       <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChangeFor('email')}
                        />
                        <button 
                            type='button'
                            onClick={()=>this.addEmailToDatabase()}
                            >
                                Submit
                            </button>
                   </label>
               </div>
               <div className="updateHeightDiv">
                   <div className="currentHeight">
                       Height: {this.props.reduxStore.user.height}
                   </div>
                   <label htmlFor="height">
                       Enter Height:
                   
                   <input
                    type="text"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleInputChangeFor('height')}
                    />
                    <button 
                            type='button'
                            onClick = {()=>this.addHeightToDatabase()}
                            >
                                Submit
                            </button>
                    </label>
               </div>
               <div className="updateWeightDiv">
                   <div className="currentWeight">
                       Current Weight: {this.props.reduxStore.user.weight}
                   </div>
                   <label htmlFor="text">
                       Enter New Weight:
                       <input
                        type="text"
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleInputChangeFor('weight')}
                        />
                        <button 
                            type='button'
                            onClick ={()=>this.addWeightToDatabase()}
                            >
                                Submit
                            </button>
                        </label>
               </div>

               

               
           </div>
           </div>
       )
   } 
}


const mapStateToProps = (reduxStore) => ({ reduxStore })
export default connect(mapStateToProps)(EditProfilePage);