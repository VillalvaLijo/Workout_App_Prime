import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

//this component will be a drop down menu of all user exercises that they can choose to 
//create an exercise set with.

class ExercisesDropDownMenu extends Component{

    state = {
        listOpen: false,
        headerTitle: 'Add New Exercise Set',
        keyword: '',
    };


    //render function will display drop down menu
    render(){
        return(
            <div classname="dd-wrapper">
                <button
                    type="button"
                    classname="dd-header"
                    onClick={() => this.toggleList()}
                    >
                        <div className="dd-header-title">Add New Exercise Set</div>
                        {}
                    </button>
            </div>
        )
    }

}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (ExercisesDropDownMenu);

