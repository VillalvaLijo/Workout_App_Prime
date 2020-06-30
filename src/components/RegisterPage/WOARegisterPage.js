import React, { Component } from 'react';
import {connect} from 'react-redux';


class WOARegisterPage extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        height: '', //height is a string to store feet and inches, when you have time, change it to a drop down menu inside your form
        weight: 0, //weight is an integer, initalize it to zero (LBS)
      };

      registerUser = (event) => {  // use this function to dispatch the input 
                                    //from the registration form to register user saga in registrationSaga
        event.preventDefault();
    
        if (this.state.username && this.state.password) {
          this.props.dispatch({
            type: 'REGISTER',
            payload: {
              username: this.state.username,
              password: this.state.password,
              email: this.state.email,
              height: this.state.height,
              weight: this.state.weight,
            },
          });
        } else {
          this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
        }
      } // end registerUser

      handleInputChangeFor = propertyName => (event) => { //function to update local state 
        this.setState({                                     // so that it can be sent to the reducer on call of function, registerUser
          [propertyName]: event.target.value,
        });
      }

render(){
    return (
        <div>
            <form>
                <h1>Create a New User Profile</h1>
                <div>
                    <label htmlFor="username">
                        Username:
                        <input
                        type = "text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor('username')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor= "password">
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChangeFor('password')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor= "email">
                        Email:
                        <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChangeFor('email')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="height">
                        Height:
                    <input
                        type= "text"
                        name= "height"
                        value={this.state.height}
                        onChange={this.handleInputChangeFor('height')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="weight">
                        Weight (lbs):           
                        {/* make this a number form later, reasearch importing numeric inputs */}
                        <input
                            type="number"
                            name="weight"
                            value= {this.state.weight}
                            onChange={this.handleInputChangeFor('weight')}
                            />
                    </label>
                </div>
                <div>
                    <input
                        className="register"
                        type="submit"
                        name="submit"
                        value="Register"
                      />
                </div>
            </form>
        </div>
           
    );
}
}




const mapStateToProps = state => ({
    errors: state.errors,
  });
  
  export default connect(mapStateToProps)(WOARegisterPage);