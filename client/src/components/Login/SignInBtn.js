import React from 'react'
import ReactDOM from 'react-dom';
import {GoogleLogin, useGoogleLogin} from 'react-google-login';
import GoogleButton from 'react-google-button';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { autocompleteClasses } from '@material-ui/core';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import EmailIcon from '@mui/icons-material/Email';

const primary = red[500];

export default function GoogleSignOn(){
    const onSuccess = (response)=> {
        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log(response);
      };

    const onFailure = (response) =>{
        console.log(response);
    };

    const {signin} = useGoogleLogin({
        onSuccess,
        onFailure,
    })

    return(
        <Stack spacing={2} direction="column">
            <GoogleButton
            // onSuccess = {responseGoogle}
            // onFailure = {responseGoogle}
            style={{
                width:'auto'
            }}
            onClick={() => { console.log('Google button clicked') }}
            />
            <Button variant="contained" style={{backgroundColor:'darkred'}} id="emailSignInBtn">
            <span>
            {/* startIcon={<EmailIcon/>} */}
            <EmailIcon></EmailIcon>
            </span>
            <span>Sign in with Email</span>
            </Button>
        </Stack>
    );
}