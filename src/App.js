import React from 'react'
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
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }
export default function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
      {({ signOut, user}) => (
    <div className="App">
      
     <Router>
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
      <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
      </div>
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        } </div>
    </Router>
   
    </div> ) } </Authenticator>
  );
}


