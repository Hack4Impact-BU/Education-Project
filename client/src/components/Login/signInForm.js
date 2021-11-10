import React, { useEffect, useState } from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import {Box,TextField} from '@material-ui/core';
import './signInForm.css';
// import './signOnBtn.js';
import GoogleSignOn from './SignInBtn.js';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Axios from "axios";

export default function SignForm(){
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
        }).then((response) => {
        console.log(response);
        });
    };

    const login = () => {
        Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
        }).then((response) => {
        if (response.data.message) {
            setLoginStatus(response.data.message);
        } else {
            setLoginStatus(response.data[0].username);
        }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
        }
        });
    }, []);




    return(
        <div className="App">
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}> Register </button>
        </div>
  
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={login}> Login </button>
        </div>
  
        <h1>{loginStatus}</h1>
      </div>
    //     <Box
    //     component="form"
    //     sx={{
    //         // '& .MuiTextField-root': { m: 1, width: '25ch' },
    //         // borderColor: 'grey.500',
    //         // borderWidth:1
    //         width:'25%',
    //         alignContent:'center',
    //         justifyContent:'space-around',
    //         margin: 'auto',
    //         width:'40%'
    //     }}
    //     noValidate
    //     autoComplete="off"
    //     border={1}
    //     // width={25}
    //     // style="border-color:black"
    //     >
    //         <div style={{fontFamily:'merriweather', textAlign:'center'}}>
    //             <h1>Sign In Form</h1>
    //         </div>
    //         <div className="inputFields">
    //             <TextField
    //                 required
    //                 id='Username'
    //                 label="User Name"
    //                 style={{margin:'auto'}}
    //                 >
                
    //             </TextField>
    //             <TextField
    //                 required
    //                 id='Password'
    //                 label="Password"
    //                 type="password"
    //                 style={{marginBottom:'30px',marginLeft:'auto',marginRight:'auto'}}
    //                 >
    //             </TextField>
    //         </div>
    //         <div className="resettingPassword">
    //             <a href="google.com" style={{fontFamily:'merriweather',fontWeight:'100'}}>Forgot Password?</a>
    //         </div>
    //         <div className="continueBtn">
    //             <Button variant="contained">Continue</Button>
    //         </div>
    //         <Divider variant="middle" />
    //         <div className="signInBtn">
    //             <GoogleSignOn></GoogleSignOn>
    //         </div>

    // </Box>
    );
}