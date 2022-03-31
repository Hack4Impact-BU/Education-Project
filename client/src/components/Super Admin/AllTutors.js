import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@material-ui/core/Typography';

const columns = [
    { field: 'id', headerName: 'ID', width: 50, sortable: false},
    { field: 'ord', headerName: 'Original Registration Date', flex: 0.8 },
    { field: 'firstName', headerName: 'First name', flex: 1 },
    { field: 'lastName', headerName: 'Last name', flex: 1 },
    { field: 'tmz', headerName: 'Time Zone (±GMT)', flex: 1 },
    { field: 'lang', headerName: 'Language', flex: 1 },
    { field: 'lcc', headerName: 'Link to contact card', flex: 1 },
    { field: 'manager', headerName: 'Manager/Admin', flex: 0.8 },
    { field: 'verif', headerName: 'Verification Status', flex: 0.4 },
    { field: 'curstep', headerName: 'Current Step', flex: 0.6 },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1.2,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

//   Connect data to rows somehow
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', ord: 35, tmz: '+5:00', lang: 'EN', lcc: 'http://www.google.com', manager: 'Rithvik Doshi', verif: 'Y', curstep: "N/A" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', ord: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', ord: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', ord: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', ord: null },
    { id: 6, lastName: 'Melisandre', firstName: null, ord: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', ord: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', ord: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', ord: 65 },
  ];  

class AllTutors extends React.Component {

render() {

    
    return(
        <div class="center">
            <Typography variant="h4" color="inherit" style={{color:'#000000'}}>
                Super Admin - All Tutors
            </Typography>
            <br/>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 20, 30]}
                    checkboxSelection
                    zeroMinWidth
                />
            </div>
        </div>
    );
}

}

export default AllTutors;