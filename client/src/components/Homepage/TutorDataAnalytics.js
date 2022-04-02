import React, { useState } from "react";
import {makeStyles, TextField} from '@material-ui/core';
import MaUTable from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import './Analytics.css';

const useStyles = makeStyles(() => ({
    textField: {
      width: 175,  
      marginRight: 20
    },
    tableHeaderCell: {
        fontWeight: 'bold', 
        color: 'white',
        backgroundColor: "darkgrey",
        marginTop: 20
    },
    tableCellBorder: { 
        border: 1,
        borderColor: 'lightgrey',
        borderStyle: 'solid'
    },
    tableContainer: { 
        borderColor: "black",
        marginTop: 20, 
        marginBottom: 20, 
    },
    input: {
      color: "black"
    }


}));

export default function TutorDataAnalytics() {
      
    const classes = useStyles();
    
    return (
            
            <div>
                <h2>Analytics - New Tutors Over Time</h2>
                <div>
                    <TextField
                        id="start date"
                        label="Choose your start date"
                        type="date"
                        defaultValue="MM/DD/YYYY"
                        className = {classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    
                    <TextField
                        id="end date"
                        label="Choose your end date"
                        type="date"
                        defaultValue="MM/DD/YYYY"
                        className = {classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />

                    <button variant="contained" className="btn">Go!</button>
                </div>
                <TableContainer className={classes.tableContainer}>
                    <MaUTable>
                            <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tableHeaderCell}>#</TableCell>
                                        <TableCell className={classes.tableHeaderCell}>Tutor First Name</TableCell>
                                        <TableCell className={classes.tableHeaderCell}>Tutor Last Name</TableCell>
                                        <TableCell className={classes.tableHeaderCell}>Tutor State</TableCell>
                                        <TableCell className={classes.tableHeaderCell}>Tutor Step(s)</TableCell>
                                        <TableCell className={classes.tableHeaderCell}>How did you hear about us?</TableCell>
                                    </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell>1</TableCell>
                                    <TableCell>TestTutorFirst</TableCell>
                                    <TableCell>TestTutorLast</TableCell>
                                    <TableCell>NJ</TableCell>
                                    <TableCell>Matched Tutors</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>


                            </TableBody>
                    </MaUTable>
                </TableContainer>
                
                

                <h3>State Counts</h3>
                <p>NJ - Count: 1</p>

                <h3>Step Counts</h3> 
                <p>Tutor Onboarding Count: 1 </p>
                <p>Tutor Orientation Count: 1</p>
                <p>Matching Pool Count: 0</p> 
                <p>Student Assignments Count: 1</p>
                <p>Matched Tutors Count: 1</p>                

            </div>
            
            

    );
}
