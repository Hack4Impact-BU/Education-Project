import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Select from "@mui/material/Select"


class Homepage extends React.Component {
    render() {
        return (
            <Box sx = {{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div style={{backgroundColor:"lightGray"}}>Schedule Tutoring Session(s)</div>
                </Grid>
                <Grid item xs={4}>
                <div style={{backgroundColor:"lightGray"}}>Log New or Scheduled Session(s)</div>
                </Grid>
                <Grid item xs={4}>
                <div style={{backgroundColor:"lightGray"}}>Review Completed Tutoring Session(s)</div>
                </Grid>

                <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"LightGray"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 16}}>Schedule & Plan Session</Typography>
                                <TextField id="outlined-basic" inputProps={{ style: {textAlign:'center'} }} label="yyyy-mm-dd" size="small" ></TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 16}}>Student</Typography>
                                <Select id="demo-simple-select" label="select from dropdown"></Select>
                            </Grid>
                        </Grid>
                    
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"LightGray"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography sx={{fontSize: 16}}>Scheduled</Typography>
                                <TextField id="outlined-basic" inputProps={{ style: {textAlign:'center'} }} label="yyyy-mm-dd" size="small" ></TextField>
                            </Grid>
                            <Grid item xs={6}>
                                
                                <Typography sx={{fontSize: 16}}>Student</Typography>
                                <Select id="demo-simple-select" label="select from dropdown"></Select>
                            </Grid>
                        </Grid>
                    
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"LightGray"}}>tt</CardContent>
                </Card>
                </Grid>

            </Grid>
            </Box>
        )
    }
}

export default Homepage;