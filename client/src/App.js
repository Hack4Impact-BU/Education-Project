import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import TutorRegistration from './components/RegistrationForms/TutorRegistration';
import CSVParser from './components/Setup/CSVParser';
import SignInForm from './components/Login/signInForm';
import Homepage from './components/Homepage/Homepage';
import StudentDataAnalytics from './components/Homepage/StudentDataAnalytics';
import TutorDataAnalytics from './components/Homepage/TutorDataAnalytics';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">      
      <Routes>
        <Route exact path='/home' element={ <Homepage/> }/>
        <Route exact path='/signin' element={ <SignInForm/> }/>
        <Route exact path='/tutorRegistration' element={ <TutorRegistration/> }/>
        <Route exact path='/setup' element={ <CSVParser/> }/>
        <Route exact path = '/dataPage' element = {<StudentDataAnalytics/>}/>
        <Route exact path = '/dataPage2' element = {<TutorDataAnalytics/>}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;