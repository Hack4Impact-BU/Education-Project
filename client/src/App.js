import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import TutorRegistration from './components/RegistrationForms/TutorRegistration';
import CSVParser from './components/Setup/CSVParser';
import SignInForm from './components/Login/signInForm';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">      
      <Switch>
        <Route exact path='/home'> <Homepage/> </Route>
        <Route exact path='/signin'> <SignInForm/> </Route>
        <Route exact path='/tutorRegistration'> <TutorRegistration/> </Route>
        <Route exact path='/setup'> <CSVParser/> </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;