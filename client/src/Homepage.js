import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

import TextField from '@mui/material/TextField'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CompletedSessions from './CompletedSessions';
import LogNew from './LogNew'
import LogScheduled from './LogScheduled'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {LogState: 1}
    }


    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                                <Typography sx={{textAlign: 'center'}}>Schedule Tutoring Session(s)</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                                <Typography sx={{textAlign: 'center'}}>Log New or Scheduled Session(s)</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                                <Typography sx={{textAlign: 'center'}}>Review Completed Tutoring Session(s)</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                            <Grid container spacing={2}>
                                <Grid item xs = {12}>
                                    <Typography sx={{fontSize: 16}}>Schedule & Plan Session</Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography sx={{fontSize: 16, textAlign: 'center'}}>Tutoring Date</Typography>
                                    <TextField fullWidth id="outlined-basic" label="yyyy-mm-dd" sx={{backgroundColor: 'white'}} ></TextField>
                                    <Typography>INSERT CALENDAR</Typography>
                                </Grid>
                                    <Grid item xs={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography sx={{fontSize: 16, textAlign: 'center'}}>Student</Typography>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">select from dropdown</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        label="Age"
                                                        sx={{backgroundColor: 'white'}}
                                                    >
                                                    <MenuItem value={10}>student 1</MenuItem>
                                                    <MenuItem value={20}>student 2</MenuItem>
                                                    <MenuItem value={30}>student 3</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography sx={{fontSize: 16, textAlign: 'center'}}>Subject/Class</Typography>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">select from dropdown</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        label="Age"
                                                        sx={{backgroundColor: 'white'}}
                                                    >
                                                    <MenuItem value={10}>class 1</MenuItem>
                                                    <MenuItem value={20}>class 2</MenuItem>
                                                    <MenuItem value={30}>class 3</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography sx={{fontSize: 16, textAlign: 'center'}}>Notes</Typography>
                                                <TextField fullWidth
                                                    id="outlined-multiline-static"
                                                    multiline
                                                    rows={4}
                                                    sx={{backgroundColor: 'white'}}
                                                />
                                            </Grid>
                                            
                                            <Grid item xs={12}>
                                                <Grid container justifyContent='flex-end'>
                                                    <Button variant="contained">Submit</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                            <Grid container spacing={0.1}>

                                <Grid item xs = {12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs = {2}>
                                            <Button variant = "text" style={{fontSize:16, textTransform: 'none', color:'black'}}
                                            onClick={() => {this.setState({ LogState: 1})
                                            }}>New</Button>
                                        </Grid>
                                        <Grid item xs = {4}>
                                            <Button variant = "text" style={{fontSize:16, textTransform: 'none', color:'black'}}
                                            onClick={() => {this.setState({ LogState: 2})
                                            }}>Scheduled</Button>
                                        </Grid>
                                         
                                    </Grid>
                                </Grid> 
                                
                                {(this.state.LogState == 1) ? <LogNew></LogNew> : <LogScheduled></LogScheduled>} 
                                
                               
                            </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                                
                                <Grid container spacing={2} justifyContent="center">

                                <Grid item xs = {12}>
                                    <Typography sx={{fontSize: 16}}>Completed Sessions</Typography>
                                </Grid>
                                    <CompletedSessions/>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Homepage;