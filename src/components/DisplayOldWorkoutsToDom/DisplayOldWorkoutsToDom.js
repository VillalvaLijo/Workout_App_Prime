import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class DisplayOldWorkoutsToDom extends Component {


    render(){
        return(
<div>
    Display Selected Workout Here:
</div>

        )
    }
    
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (DisplayOldWorkoutsToDom);