import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class AddExerciseButton extends Component{

    addExerciseToRedux(){
        this.props.dispatch({       
            type: 'POST_EXERCISES',  
            payload: {
                user_id: this.props.reduxStore.user.id
            }
        });
    }
    

    render(){
        return(
            <div className= "addExerciseButtonDiv">
                <button type= "button" onClick= {this.addExerciseToRedux()}>
                    Add Exercise
                </button>

            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (AddExerciseButton);