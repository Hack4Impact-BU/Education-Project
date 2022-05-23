import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import TutorRegistration from './components/RegistrationForms/TutorRegistration';
import AdminTutorReferenceChecks from './components/RegistrationForms/AdminTutorReferenceCheck';
import CSVParser from './components/Setup/CSVParser';
import SignInForm from './components/Login/signInForm';
import Homepage from './components/Homepage/Homepage';

import SuperAdmin from './components/Super\ Admin/SuperAdmin';

import UserSearch from './components/UserSearch/UserSearch';

import PhoneScreenInterview from './components/PhoneScreenInterview/PhoneScreenInterview';

import TutorStateSpecifics from './components/Analytics/TutorStateSpecifics';


import ContactCardStudent from './components/ContactCardStudent';

import BackgroundCheck from './components/Forms/BackgroundCheck';
// From this tutorial as an example how to connect client and server 
// https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-react-app-with-nodejs-bc06fa1c18f3
// *****
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'
// *****

function App() {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)

  const userCreate = (e) => {

    createUser(user)
      .then(response => {
        console.log(response);
        setNumberOfUsers(numberOfUsers+1)
    });
}

  const fetchAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
    });
}

  useEffect(() => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
    });
}, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
    }
    setUser(user)
}




  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">      
      <Routes>
        <Route exact path='/home' element={ <Homepage/> }/>
        <Route exact path='/signin' element={ <SignInForm/> }/>
        <Route exact path='/tutorRegistration' element={ <TutorRegistration/> }/>
        <Route exact path='/adminTutorReferenceChecks' element={ <AdminTutorReferenceChecks/> }/>
        <Route exact path='/setup' element={ <CSVParser/> }/>

        <Route exact path='/super-admin' element={ <SuperAdmin/> }/> {/* Added by Rithvik Doshi */}

        <Route exact path='/search' element={ <UserSearch/> }/>

        <Route exact path='/phoneScreenInterview' element= { <PhoneScreenInterview/> } />
        <Route exact path='/analytics' element={ <TutorStateSpecifics/> }/>

        {/* Contact card to take in props? */}
        <Route exact path='/contactStudent' element={ <ContactCardStudent/> }/> 

        <Route exact path='/BackgroundCheck' element={ <BackgroundCheck/> } />



      </Routes>
      </div>
      <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <CreateUser 
                    user={user}
                    onChangeForm={onChangeForm}
                    createUser={userCreate}
                    >
                  </CreateUser>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfUsers={numberOfUsers}
                    getAllUsers={fetchAllUsers}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>
    </div>
    </Router>
  );
}


export default App;
