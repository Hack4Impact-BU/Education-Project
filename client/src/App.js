import React from 'react'
import TutorRegistration from './components/RegistrationForms/TutorRegistration';
import CSVParser from './components/Setup/CSVParser';
import SignInForm from './components/Login/signInForm';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>
      <h1>Welcome to Education Project!</h1>
      <TutorRegistration></TutorRegistration>
      <CSVParser/>
      <SignInForm></SignInForm>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
