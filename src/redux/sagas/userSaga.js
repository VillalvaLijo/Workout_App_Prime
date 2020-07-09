import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* putUserEmailToServer(action){
  //action.payload will contain user email and user id
  const id = action.payload.id;
  const config ={
    email: action.payload.email
  }
  try{
    yield axios.put(`/api/user/user_email?id=${id}`, config);
  }catch(error){
    console.log('Inside UserSaga, error with user email PUT request:', error);
  }

  //now write get request to update Redux State so it will be displayed to the DOM
  try{
    // const emailGetResponse = yield axios.get()

    //try using the GET request in Saga fetchUser by using a yield put with 'FETCH_USER' as the type
    //use call? call(fetchUser) //going to try it and 
    yield call(fetchUser);  //says call is not defined, figure out if you need to import anything -> you have to put call in the import from the saga library
  }catch(error){
    console.log('Inside putUserEmailToServer, error with fetchUser call:', error);
  }
}

function* putUserHeightToServer(action){
  const id = action.payload.id;
  const config ={
    height: action.payload.height
  }
  try{
    yield axios.put(`/api/user/user_height?id=${id}`, config);
  }catch(error){
    console.log('Inside UserSaga, error with user height PUT request:', error);
  }
  //call fetchUser to update ReduxStore with user height
  try{
    yield call(fetchUser);
  }catch(error){
    console.log("Inside putHeightToServer, error with fetchUser call", error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  //write 3 new sagas, that will update user email, height and weight, send to reducer aftr
  //the put request is made. so you will call a put, then a get then a put to the user reducer.
  yield takeLatest('PUT_USER_EMAIL_TO_SERVER', putUserEmailToServer);
  yield takeLatest('PUT_USER_HEIGHT_TO_SERVER', putUserHeightToServer);
}

export default userSaga;
