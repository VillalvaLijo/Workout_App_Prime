import React, { Component } from 'react';
import {connect} from 'react-redux';


class WOARegisterPage extends Component {

render(){
    return (
        <div>
            <form>
                
            </form>

        </div>
    )
}


}

const mapStateToProps = state => ({
    errors: state.errors,
  });
  
  export default connect(mapStateToProps)(WOARegisterPage);