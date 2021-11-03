// import logo from './logo.svg';
//import './App.css';
import './components/signOnBtn.js'
import GoogleSignOn from './components/signOnBtn.js';
// import {Grid, Paper, Button} from '@material-ui/core'
// import './components/gridBar.js'
// import BasicGrid from './components/gridBar.js';
import './components/signInForm.js';
import SignForm from './components/signInForm';

function App() {
  return (
    <div>
      {/* <BasicGrid class="xgrid"></BasicGrid> */}
      <SignForm></SignForm>
    </div>
  );
}

export default App;
