import {
  Box,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  InputLabel,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import UserSearchTable from "./UserSearchTable";

function UserSearch() {
  const defaultValues = {
    userType: "",
    firstName: "",
    lastName: "",
    id: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    matchStep: "",
    location: "",
    language: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormValues({ ...formValues, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Clear form values after submit?
    // setFormValues(defaultValues)
  };

  return (
    <Box sx={{ p: 3 }}>
      <h1>User Search</h1>
      <FormControl>
            <FormLabel id="">User Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby=""
              name="userType"
              value={formValues.userType}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="tutor"
                control={<Radio size="small" />}
                label="Tutor"
              />
              <FormControlLabel
                value="student"
                control={<Radio size="small" />}
                label="Student"
              />
            </RadioGroup>
          </FormControl>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
        <Grid container direction="column" gap={1} >
          <TextField
            id=""
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
          <TextField
            id=""
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
          <TextField
            id=""
            label="ID Number"
            name="id"
            value={formValues.id}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid container direction="column" gap={1}>
          <TextField
            id=""
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
          <MuiPhoneNumber
            id=""
            label="Phone #"
            // dropdownClass="mui-dropdown"
            variant="outlined"
            size="small"
            disableAreaCodes={true}
            defaultCountry={"us"}
            value={formValues.phone}
            onChange={handlePhoneChange}
          />
          <TextField
            id=""
            label="Grade Level"
            name="grade"
            value={formValues.grade}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
          <TextField
            id=""
            label="Subject"
            name="subject"
            value={formValues.subject}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid container direction="column" gap={1}>
          <FormControl>
            <InputLabel id="">Match Step</InputLabel>
            <Select
              labelId=""
              size="small"
              name = "matchStep"
              value={formValues.matchStep}
              label="Match Step"
              autoWidth
              onChange={handleInputChange}
            >
              <MenuItem value={10}>Test</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id=""
            label="State / Location"
            name="location"
            value={formValues.location}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
          <TextField
            id=""
            label="Language"
            name="language"
            value={formValues.language}
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={handleInputChange}
          />
          <Button variant="outlined" size="small" onClick={handleSubmit}>
            Search
          </Button>
        </Grid>
      </Box>
      <hr></hr>
      <UserSearchTable />
    </Box>
  );
}

export default UserSearch;
