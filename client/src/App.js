import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import TutorRegistration from './components/RegistrationForms/TutorRegistration';
import CSVParser from './components/Setup/CSVParser';
import SignInForm from './components/Login/signInForm';
import Homepage from './components/Homepage/Homepage';
import AllTutors from './components/Super Admin/AllTutors';
import UserSearch from './components/UserSearch/UserSearch';
import BackgroundCheck from './components/Forms/BackgroundCheck';
import MatchingPool from './components/Super Admin/MatchingPool';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">      
      <Routes>
        <Route exact path='/home' element={ <Homepage/> }/>
        <Route exact path='/signin' element={ <SignInForm/> }/>
        <Route exact path='/tutorRegistration' element={ <TutorRegistration/> }/>
        <Route exact path='/setup' element={ <CSVParser/> }/>
        <Route exact path='/user-search' element={ <UserSearch/> }/>
        <Route exact path='/bkgcheck' element={ <BackgroundCheck/> }/>
        <Route exact path='/super-admin/all-tutors' element={ <AllTutors/> }/>
        <Route exact path='/super-admin/matching-pool' element={ <MatchingPool/> }/> {/* Added by Rithvik Doshi */}
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;