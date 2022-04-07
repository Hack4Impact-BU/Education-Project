import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@material-ui/core/Typography';

const columns = [
    { field: 'id', headerName: 'ID', width: 50, sortable: false},
    { field: 'tmpd', headerName: 'Tutor Matching Pool Date', flex: 1 },
    { field: 'priority', headerName: 'Priority', flex: 1 },
    { field: 'tinfo', headerName: 'Tutor Info', flex: 1 },
    { field: 'students', headerName: 'Students', flex: 1 },
    { field: 'mng', headerName: 'Manager/Admin', flex: 1 },
    { field: 'adnotes', headerName: 'Admin Notes', flex: 1 },
    { field: 'opt', headerName: 'Options', flex: 1 },
  ];

//   Connect data to rows somehow
const rows = [
    {id: 1, tmpd: "4-7-2022 14:38:22", priority: "Normal", tinfo: "TestTutor", students: "Two students", mng: "Robert Townsend", adnotes: "None", opt: "None"}
  ];  

class MatchingPool extends React.Component {

render() {

    
    return(
        <div class="center">
            <Typography variant="h4" color="inherit" style={{color:'#000000'}}>
                Super Admin - Matching Pool
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

export default MatchingPool;