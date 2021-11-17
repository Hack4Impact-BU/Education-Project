import React from 'react';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Calendar from 'react-calendar'

export default function LogNew() {
    return (
        <Grid container spacing = {2}>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography sx={{fontSize: 16, textAlign: 'center'}}>Tutoring Date</Typography>
                        <TextField fullWidth id="outlined-basic" label="yyyy-mm-dd" sx={{backgroundColor: 'white'}} ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Calendar></Calendar>
                    </Grid>
                </Grid>
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
                        <Typography sx={{fontSize: 16, textAlign: 'center'}}>Time</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="hours" variant="outlined" sx={{backgroundColor: 'white'}}/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="minutes" variant="outlined" sx={{backgroundColor: 'white'}} />
                            </Grid>
                        </Grid>
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
        
    )
}