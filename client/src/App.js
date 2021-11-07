import React from 'react'
import TutorRegistration from './TutorRegistration';
import CSVParser from './CSVParser';
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
