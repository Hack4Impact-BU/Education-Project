import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

function UserSearchTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {},
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // Hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    // Map over data as TableRows in TableBody
    // https://mui.com/components/tables/#BasicTable.js
    <>
      <h2>Showing results for: </h2>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="user search table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">ID Number</StyledTableCell>
              <StyledTableCell align="center">User Type</StyledTableCell>
              <StyledTableCell align="center">Options</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserSearchTable;
