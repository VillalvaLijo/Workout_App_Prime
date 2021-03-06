import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Header/Header';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';

//import workout app pages
//import WOARegisterPage from '../'
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import NewWorkoutPage from '../NewWorkouPage/NewWorkoutPage';
import NewExercisePage from '../NewExercisePage/NewExercisePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import WorkoutHistoryPage from '../WorkoutHistoryPage/WorkoutHistoryPage';
import StatisticsPage from '../StatisticsPage/StatisticsPage';

import './App.css';


class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserProfilePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* Add routes for the workout App, they will navigate to your pages,
            Add a route for New Workout Page, Add New Exercises Page, and Edit Profile Page */}
            <ProtectedRoute
              exact
              path ="/newworkout"
              component={NewWorkoutPage}
              />
            {/* Add Route for new exercise page */}
            <ProtectedRoute
              exact
              path="/addnewexercise"
              component={NewExercisePage}
              />
              {/* Route for Display old workouts page */}
              <ProtectedRoute
                exact
                path="/displaypreviousworkouts"
                component={WorkoutHistoryPage}
                />
                {/* Add route for statistics page */}
                <ProtectedRoute
                  exact
                  path="/statistics"
                  component={StatisticsPage}
                />
            {/* add new route for edit profile page here */}
              <ProtectedRoute
                exact
                path="/editprofile"
                component={EditProfilePage}
              />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
