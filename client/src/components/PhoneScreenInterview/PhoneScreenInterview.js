import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import 'fontsource-roboto';
import Rating from '@mui/material/Rating';
import Button from '@material-ui/core/Button' 
import Box from '@material-ui/core/Box' 

import Typography from '@material-ui/core/Typography'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'

const PhoneScreenInterview = () => {

    // const [answer, setAnswer] = useState( '' )
    // const [value, setvalue] = useState(2)
    const [hover, setHover] = useState(-1)

  return (
      <ThemeProvider theme={theme}>
    <center>
    <div
        justifyContent= 'center'>
    <Box>

        <Typography
            variant='h2'> 
            Phone Screen Interview: 
        </Typography> 

        <div>
        <Typography
            component='p'
        >
            Provide a 60-second introduction of yourself
        </Typography>

        <TextField 
            variant='outlined'
            color='primary'
            label='Question 1'
            component='div'
            style={{width: '33%'}}
            required
            multiline
        />
        </div>

        <div>
        <Typography
            component='p'
        >
            Why are you interested in volunteering at The Education Project?
        </Typography>

        <TextField 
            variant='outlined'
            color='primary'
            label='Question 2'
            component='div'
            style={{width: '33%'}}
            required
            multiline
        />
        </div>

        <div>
        <Typography
            component='p'
        >
            Please tell me about your prior tutoring or volunteering experience 
        </Typography>

        <TextField 
            variant='outlined'
            color='primary'
            label='Question 3'
            component='div'
            style={{width: '33%'}}
            required
            multiline
        />
        </div>

        <div>
        <Typography
            component='p'
        >
            Please provide a professional or academic reference below
        </Typography>

        <TextField 
            variant='outlined'
            color='primary'
            label='Question 4'
            component='div'
            style={{width: '33%'}}
            required
            multiline
        />
        </div>

        <Box
            ml={25}
            mr={25}
            display="flex" 
            justifyContent="center" 
            alignItems="center"
        >
        <Typography style={{marginBottom: 30}} paragraph>
            Thank you for taking the time for this phone screen. 
            We really appreciate your willingness to volunteer at The Education Project.
            I will be sending you an invite to the orientation shortly. Thank you
            and have a good day!
        </Typography>
        </Box>

        <Typography>
            Overall Opinion of Interviewer:
        </Typography>

        <Rating
            name="hover-feedback"
            precision={0.5}
            onChangeActive={(event, newHover) => {
                setHover(newHover);
              }} 
            style={{marginBottom: 30}}
        >
        </Rating>
              
        <div>
        <Typography>
            Concerns of Interviewer:
        </Typography>

        <TextField 
            variant='outlined'
            color='primary'
            component='div'
            style={{width: '33%'}}
            required
            multiline
        />
        </div>

        <Button
            color="primary"
            variant="contained"
            size="large"
            style={{marginRight: 10}}
        >
            Submit
        </Button>

        <Button
            color="secondary"
            variant="contained"
            size="large"
        >
            Save Progress
        </Button>

    </Box>
    </div>
    </center>
    </ThemeProvider>
  )
}

const theme = createTheme ({
    typography: {
        h2: {
            fontSize: 56,
            fontWeight: 600,
            marginBottom: 30
        },
        body1: {
            fontSize: 18,
            marginBottom: 20
        }
    }
});

export default PhoneScreenInterview