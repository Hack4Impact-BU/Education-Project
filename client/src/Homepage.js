import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Select from "@mui/material/Select"
import InputLabel from '@mui/material/InputLabel'
import Table from '@mui/material/Table'


class Homepage extends React.Component {
    render() {
        return (
            <Box sx = {{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div style={{backgroundColor:"lightGray", textAlign:'center'}}>Schedule Tutoring Session(s)</div>
                </Grid>
                <Grid item xs={4}>
                <div style={{backgroundColor:"lightGray", textAlign:'center'}}>Log New or Scheduled Session(s)</div>
                </Grid>
                <Grid item xs={4}>
                <div style={{backgroundColor:"lightGray", textAlign:'center'}}>Review Completed Tutoring Session(s)</div>
                </Grid>

                <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"LightGray"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize: 18}}>Schedule & Plan Session</Typography>
                                
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 16}} align="center">Tutoring Date</Typography>
                                <TextField id="outlined-basic" inputProps={{ style: {textAlign:'center'} }} label="yyyy-mm-dd" size="small" ></TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 16}} align="center">Student</Typography>
                                {/* <InputLabel id="to-schedule-student-label">select from dropdown</InputLabel> */}
                                <Select 
                                    id="to-schedule-student" 
                                    labelId="to-schedule-student-label" 
                                    label="select from dropdown"
                                    sx={{width: '100%'}}
                                    ></Select>
                            </Grid>
                        </Grid>
                    
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={4}>
                <Card>
                <CardContent style={{backgroundColor:"LightGray"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize: 18}}>Scheduled</Typography>
                                
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 16}} align="center">Tutoring Date</Typography>
                                <TextField id="outlined-basic" inputProps={{ style: {textAlign:'center'} }} label="yyyy-mm-dd" size="small" ></TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 16}} align="center">Student</Typography>
                                {/* <InputLabel id="scheduled-student-label">select from dropdown</InputLabel> */}
                                <Select 
                                    id="scheduled-student" 
                                    labelId="scheduled-student-label" 
                                    label="select from dropdown"
                                    sx={{width: '100%'}}
                                    ></Select>
                            </Grid>
                        </Grid>
                    
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"LightGray"}}>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize: 18}}>Completed Sessions</Typography>
                                
                            </Grid>
                        
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