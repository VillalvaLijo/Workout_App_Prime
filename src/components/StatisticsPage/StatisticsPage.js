import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

//import exercise drop down so you can show you will select from 
//user workouts and then graph the output.
// cool thing to do if you have time would be to display
//all exercise_events to the DOM then explain how you would graph through them
//proably will take me 3 hours to do that.

class StatisticsPage extends Component{

    render(){
        return(
            <div className="statisticsComponent">
                <h1>Statistics Page</h1>
            </div>
        )
    }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (StatisticsPage);