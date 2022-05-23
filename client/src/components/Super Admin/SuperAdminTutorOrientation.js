import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
// does this get integrated through a route or as part of a different component? 

// set up information imports
const getTutorInfo = () => {
  return(
    <>
    <Grid container spacing={0.3}>
    <Grid item>
    <Typography variant='body2'>
    <strong>First Name: </strong> TestTutorFirst <br/>
    <strong>Last Name: </strong>  TestTutorLast <br/>
    <strong>Tutor Grade: </strong> High School <br/>
    <strong>Subjects: </strong> Physics <br/>
    <strong>Location (TimeZone): </strong> NJ <br/>
    <strong>Language: </strong> English <br/>
    </Typography>
    </Grid>

    <Grid item>
    <Link>Go To Contact Card</Link>
    </Grid>
    </Grid>
    </>
  )
}

// view buttons?
// set up file download
const getDocuments = () => {
  return (
    <>

    <Grid container rowSpacing={1}>

    <Grid item>
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<DownloadIcon/>}
      sx={{fontSize: 0.2, textDecoration:'none'}}>
      <Typography 
        variant='button'>
        Unofficial Transcript
      </Typography>
    </Button>
    </Grid>
    
    <Grid item>
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<DownloadIcon/>}
      sx={{fontSize: 0.2, textDecoration:'none'}}>
      <Typography 
        variant='button'>
        Proof of Employment
      </Typography>
    </Button>
    </Grid>

    <Grid item>
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<DownloadIcon/>}
      sx={{fontSize: 0.2, textDecoration:'none'}}>
      <Typography 
        variant='button'>
        Resume
      </Typography>
    </Button>
    </Grid>

    </Grid>
    </>
  )
}

const getAdmin = () => {
  return(
    <>
    <Grid container>
    <Grid item>
    <Typography>
      Current Admin: <br/>
      example.admin@gmail.com {/* set up import */}
      <br /> 
      Reassign to a new admin: <br />
    </Typography>
    </Grid>
    
    <Grid item xs={10}>
    <FormControl fullWidth>
    <Select variant='standard'      >
      {/* Import list of tutors */}
      <MenuItem value={1}>john.admin@gmail.com</MenuItem>
      <MenuItem value={2}>other.admin@gmail.com</MenuItem>
      <MenuItem value={3}>michael.scott@gmail.com</MenuItem>
    </Select>
    </FormControl>
    </Grid>

    </Grid>

    </>
  )
}

const getAdminNotes = () => {
  return(
    <>
    <Grid container>
      <Grid item>
      <Typography>
      <strong>Admin Log Notes</strong> <br/>
      Previous Step Note: {/* Needs to be imported (?) */}
      </Typography>
      </Grid>

      <Grid item> 
      <TextField />
      </Grid>
    </Grid>
    </>
  )
}

const getOptions = () => {
  return(
    <>
    <Grid container>
  
    <Grid item>
    <FormControl>
      <FormLabel>Tutor Completed Orientation?</FormLabel>
      <RadioGroup row>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No (Gave Up)" />
      </RadioGroup>
    </FormControl>
    </Grid>
    
    <Grid item sx={{mb: 1}}>
    <Button
      variant="contained"
      color="primary"
      size="small">
        Save Note
    </Button>
    </Grid>

    <Grid item>
    <Button
      variant="contained"
      color="primary"
      size="small">
        Assign New Admin
    </Button>
    </Grid>

    </Grid>
    </>
  )
}



const columns = [
    {field: "regDate", headerName: "Registration Date", minWidth: 100, type: "dateTime", flex: 0.8},
    {field: "priority", headerName: "Priority", flex: 0.5, minWidth: 120},
    {field: "tutorInfo", headerName: "Tutor Information", renderCell: getTutorInfo, minWidth: 150, flex: 1}, // figure out link
    {field: "documents", headerName: "Documents",  renderCell: getDocuments, minWidth: 250,  flex: 1}, // render buttons using renderCell
    {field: "admin", headerName: "Manager / Admin", renderCell: getAdmin, minWidth: 250},
    {field: "adminNotes", headerName: "Admin Notes", renderCell: getAdminNotes, flex: 1}, // add textbox, submit in options
    {field: "options", headerName: "Options", renderCell: getOptions, minWidth: 242, flex: 1}, // type: actions (?) Alternatively, render radio here and make another column to submit
    
 
  ];


//   Connect data to rows somehow - set up function that maps from a list onto rows
const date1 = new Date()
const date2 = new Date('December 17, 1995 03:24:00');
const rows = [
    {id: 1, regDate: date1, priority: "Normal Priority"},
    {id: 2, regDate: date2, priority: "High Priority"}
  ];  


const SuperAdminTutorOrientation = () => {
  
    return(
   <Box>
         <Typography variant="h4" color="inherit" style={{color:'#000000'}}>
                Super Admin - Tutor Orientation
            </Typography>
            <br/>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection={false}
                    rowHeight={153}
                    pageSize={10}
                    rowsPerPageOptions={[10, 20, 30]}
                    zeroMinWidth
                />
            </div>
    </Box>
   )
}

export default SuperAdminTutorOrientation;