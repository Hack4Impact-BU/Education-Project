import React from 'react'
import TutorRegistration from './components/RegistrationForms/TutorRegistration';
import CSVParser from './components/Setup/CSVParser';
import SignInForm from './components/Login/signInForm';

function App() {
  return (
    <div>
      <h1>Education Project Front-End</h1>
      <TutorRegistration></TutorRegistration>
      <CSVParser/>
      <SignInForm></SignInForm>
    </div>
  );
}

export default App;
