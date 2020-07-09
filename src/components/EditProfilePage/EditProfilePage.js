import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';


class EditProfilePage extends Component {

    //on this form list the user's current email address height and weight, then make it editable and update 
    //the DOM with the new inputs

    state = {
        email: '',
        height: '',
        weight: '',
    }

    componentDidMount(){
        console.log("inside componentDidMount in Edit Profile Page, this.props.reduxStore.user", this.props.reduxStore.user);
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
           <h1> Welcome {this.props.reduxStore.user.username}</h1>
           <h3>Update your profile so we can use data to better track your workouts</h3>
           <p>Here at Your Workout Tracker we are absolutly dedicated to using real data to take your fitness to the next level. 
               The more we know about you the better we can help you kill it in the gym. Enter your data if your ready to take your workouts to the next level. 
               (privacy policy)
           </p>
           </div>
           <div className="updateUserProfileFormDiv">
               <div className="updateEmailDiv">
                   <p>Update your email so we can send your workouts and stats directly to your inbox</p>
                   <label htmlFor="email">
                       Email:
                       <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChangeFor('email')}
                        />
                   </label>

               </div>
               

               
           </div>
           </div>
       )
   } 
}


const mapStateToProps = (reduxStore) => ({ reduxStore })
export default connect(mapStateToProps)(EditProfilePage);