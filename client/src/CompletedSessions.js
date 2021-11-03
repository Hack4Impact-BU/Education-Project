import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function createData(date, student, time, notes) {
    return { date, student, time, notes};
  }
  
  const rows = [
    createData('2022/02/03', 'John Doe', '1 hour 30 min', 'Blah blah blah blah blah'),
    createData('2022/02/01', 'John Doe', '1 hour 45 min', 'Blah blah blah blah blah'),
    createData('2022/02/03', 'John Doe', '1 hour 30 min', 'Blah blah blah blah blah'),
    createData('2022/02/01', 'John Doe', '1 hour 45 min', 'Blah blah blah blah blah')
  ];

export default function CompletedSessions() {
    return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Student</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Notes</TableCell>
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
                    {row.time}
                  </div>
              </TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}