import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import { DataGrid } from '@material-ui/data-grid';
import { Redirect, Link } from 'react-router-dom';

const TutorStateSpecifics = () => {

    const columns = [
        { field: 'id', headerName: 'ID',minWidth: 100, flex: 1 },
        { field: 'firstName', headerName: 'First Name',minWidth: 100, flex: 1},
        { field: 'lastName', headerName: 'Last Name',minWidth: 100, flex: 1},
        { field: 'state', headerName: 'Tutor State',minWidth: 100, flex: 1},
        { field: 'contactCard', headerName: 'Contact Card',minWidth: 100, flex: 1}
      ];

    // const DataGrid = () => {

    //     const [data, setData] = useState([]);

    // }
      
      const rows = [
        { id: 1, firstName: 'Jon', lastName: 'Snow', state: 'NJ', contactCard: 'insertLink' },
        { id: 2, firstName: 'Daenerys', lastName: 'Targaryen', state: 'NY', contactCard: 'insertLink' },
        { id: 3, firstName: 'Arya', lastName: 'Stark', state: 'CA', contactCard: 'insertLink' },
        { id: 4, firstName: 'Sansa', lastName: 'Stark', state: 'CA', contactCard: 'insertLink' },
        { id: 5, firstName: 'Tyrion', lastName: 'Lannister', state: 'CA', contactCard: 'insertLink' },
        { id: 6, firstName: 'Cersei', lastName: 'Lannister', state: 'CA', contactCard: 'insertLink' },
        { id: 7, firstName: 'Jaime', lastName: 'Lannister', state: 'CA', contactCard: 'insertLink' },
      ];

    return (
        <center>
        <div>
            {/* <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                flex
                alignItems="center"
                noValidate
                autoComplete="off"
                p={2}
            >
                <div>
                    <TextField
                        variant="outlined"
                        color="primary"
                        label="First Name"
                    />
                    <TextField
                        variant="outlined"
                        color="primary"
                        label="Last Name"
                    />
                    <TextField
                        variant="outlined"
                        color="primary"
                        label="State"
                    />
                </div>
            </Box> */}


            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                autoHeight={true}
                autoPageSize={true}
                xs={12}
                sm={6}
                md={4}
            />
        </div>
        </center>
    )
}

export default TutorStateSpecifics;