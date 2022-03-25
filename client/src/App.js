import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import TutorRegistration from './components/RegistrationForms/TutorRegistration';
import CSVParser from './components/Setup/CSVParser';
import SignInForm from './components/Login/signInForm';
import Homepage from './components/Homepage/Homepage';
import UserSearch from './components/UserSearch/UserSearch';
import ContactCardStudent from './components/ContactCardStudent';

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
        <Route exact path='/search' element={ <UserSearch/> }/>
        {/* Contact card to take in props? */}
        <Route exact path='/contactStudent' element={ <ContactCardStudent/> }/> 
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;