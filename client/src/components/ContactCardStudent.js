import {
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const ContactCardStudent = (props) => {
  // Do a map over the props and return a table row for each row in the future
  // https://mui.com/components/tables/#BasicTable.js

  const [school, setSchool] = useState("");

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  return (
    <>
      <h1>Contact Card</h1>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Guardian ID</TableCell>
              <TableCell>Test ID</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Guardian First Name</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Guardian Last Name</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student First Name</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Last Name</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Age</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Subjects</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Grade Level</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Timezone / State</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Language</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Student Registration Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Guardian Email Address</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Guardian Phone Number</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Career Interests</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tell Us About Yourself / Your Interests</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>How did you hear about us?</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Step the student is currently in</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Reinsert into Matching Pool</TableCell>
              <TableCell>
                <Button variant="outlined" size="small" onClick={null}>
                  Reinsert into Matching Pool
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Copy / Insert into School:</TableCell>
              <TableCell>
                <Grid container direction="column">
                  <FormControl margin="normal">
                    <InputLabel id="">School</InputLabel>
                    <Select
                      labelId=""
                      size="small"
                      value={school}
                      onChange={handleSchoolChange}
                      label="School"
                    >
                      <MenuItem value={10}>Test School Name</MenuItem>
                    </Select>
                  </FormControl>
                  <Button variant="outlined" size="small" onClick={null}>
                    Copy Student Data
                  </Button>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactCardStudent;
