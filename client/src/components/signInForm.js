import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import {Box,TextField} from '@material-ui/core';
import './signInForm.css';
import './signOnBtn.js';
import GoogleSignOn from './signOnBtn.js';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function SignForm(){
    return(
        <Box
        component="form"
        sx={{
            // '& .MuiTextField-root': { m: 1, width: '25ch' },
            // borderColor: 'grey.500',
            // borderWidth:1
            width:'25%',
            alignContent:'center',
            justifyContent:'space-around',
            margin: 'auto',
            width:'40%'
        }}
        noValidate
        autoComplete="off"
        border={1}
        // width={25}
        // style="border-color:black"
        >
            <div style={{fontFamily:'merriweather', textAlign:'center'}}>
                <h1>Sign In Form</h1>
            </div>
            <div className="inputFields">
                <TextField
                    required
                    id='Username'
                    label="User Name"
                    style={{margin:'auto'}}
                    >
                </TextField>
                <TextField
                    required
                    id='Password'
                    label="Password"
                    type="password"
                    style={{marginBottom:'30px',marginLeft:'auto',marginRight:'auto'}}
                    >
                </TextField>
            </div>
            <div className="resettingPassword">
                <a href="google.com" style={{fontFamily:'merriweather',fontWeight:'100'}}>Forgot Password?</a>
            </div>
            <div className="continueBtn">
                <Button variant="contained">Continue</Button>
            </div>
            <Divider variant="middle" />
            <div className="signInBtn">
                <GoogleSignOn></GoogleSignOn>
            </div>
    </Box>
    );
}