import React from 'react'
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" element={<App />} />
    </Router>
  )
}

export default App;