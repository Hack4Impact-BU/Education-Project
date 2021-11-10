import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(assignment_date, priority, student_name, tutor_name, admin_notes, options) {
    return { assignment_date, priority, student_name, tutor_name, admin_notes, options };
}
  
const rows = [
    createData('2022/02/03', 'Low', 'Robert, Townsend', 'Lucy, Cao', 'Under-qualified goon', ''),
    createData('2022/02/03', 'Low', 'Robert, Townsend', 'Lucy, Cao', 'Under-qualified goon', ''),
    createData('2022/02/03', 'Low', 'Robert, Townsend', 'Lucy, Cao', 'Under-qualified goon', ''),
    createData('2022/02/03', 'Low', 'Robert, Townsend', 'Lucy, Cao', 'Under-qualified goon', ''),
    createData('2022/02/03', 'Low', 'Robert, Townsend', 'Lucy, Cao', 'Under-qualified goon', '')
];

class CSVTable extends React.Component {
    render() {
        return (
            <div>
                <h1>Student Assignments</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Assignment Date</TableCell>
                            <TableCell align="right">Priority</TableCell>
                            <TableCell align="right">Student Name</TableCell>
                            <TableCell align="right">Tutor Name</TableCell>
                            <TableCell align="right">Admin Notes</TableCell>
                            <TableCell align="right">Options</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.assignment_date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.assignment_date}
                            </TableCell>
                            <TableCell align="right">{row.priority}</TableCell>
                            <TableCell align="right">{row.student_name}</TableCell>
                            <TableCell align="right">{row.tutor_name}</TableCell>
                            <TableCell align="right">{row.admin_notes}</TableCell>
                            <TableCell align="right">{row.options}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default CSVTable;