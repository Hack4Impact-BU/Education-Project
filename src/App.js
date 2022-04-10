import React, { useState, useEffect } from 'react';
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

import { Authenticator } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const initialState = { name: '', description: '' }


const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <Authenticator >
      {({ signOut, user}) => (
    <div className="App">
      
      <h1>Hello {user.username}</h1>
        <button style={styles.button} onClick={signOut}>Sign out</button>
        <br />
     <Router>
      <Navbar />
      <div className="content">      
      <Routes>
        <Route exact path='/home' element={ <Homepage/> }/>
        <Route exact path='/signin' element={ <SignInForm/> }/>
        <Route exact path='/tutorRegistration' element={ <TutorRegistration/> }/>
        <Route exact path='/adminTutorReferenceChecks' element={ <AdminTutorReferenceChecks/> }/>
        <Route exact path='/setup' element={ <CSVParser/> }/>

        <Route exact path='/super-admin' element={ <SuperAdmin/> }/> 

        <Route exact path='/search' element={ <UserSearch/> }/>

        <Route exact path='/phoneScreenInterview' element= { <PhoneScreenInterview/> } />
        <Route exact path='/analytics' element={ <TutorStateSpecifics/> }/>

        
        <Route exact path='/contactStudent' element={ <ContactCardStudent/> }/> 

        <Route exact path='/BackgroundCheck' element={ <BackgroundCheck/> } />



      </Routes>
      
      </div>
      </Router>
       <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
   
   
    </div> ) } 
    
    </Authenticator>
  );
}
const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App


