import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


function createData(date, student, course) {
    return { date, student, course};
  }
  
  const rows = [
    createData('2022/02/03', 'John Doe', 'Biology'),
    createData('2022/02/03', 'John Doe', 'Math'),
    createData('2022/02/03', 'John Doe', 'Biology'),
    createData('2022/02/03', 'John Doe', 'Math'),

  ];

export default function LogScheduled() {
    return (
    <Grid container spacing = {2}>
        <Grid item xs={12}>
            <TableContainer sx = {{ maxHeight: 175 }}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Student</TableCell>
                    <TableCell>Subject/Course</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>
                            <div style={{whiteSpace:'nowrap'}}>
                                {row.student}
                            </div>
                            </TableCell>
                        <TableCell>
                            <div style={{whiteSpace:'nowrap'}}>
                                {row.course}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
        <Grid item xs={6}>
            <Typography sx={{fontSize: 16, textAlign: 'center'}}>Notes</Typography>
                <TextField fullWidth
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    sx={{backgroundColor: 'white'}}
                />
            </Grid>
        <Grid item xs={6}>
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
            <Grid container justifyContent='flex-end'>
                <Button variant="contained">Submit</Button>
            </Grid>
        </Grid>


    </Grid>
    )
}