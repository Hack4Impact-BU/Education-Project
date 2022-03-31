import { Grid, Box } from '@mui/material';
import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";

const Hr = () => {
    return(
    <>
    <br /> <br />
    <hr style={{borderColor: "rgba(242, 242, 242, 0.45)"}}/>
    </>)
};

const defaultValues = {
    transcript: "",
    gSearch: "",
    linkedIn: "",
    NSOD: null,
    criminalRec: null,
    opinion: "",
    concerns: ""
  };

const BackgroundCheck = () => {

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormValues({
            ...formValues,
            [name]: value,
            });
    };

    const handleFileChange = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
            setFormValues({
            ...formValues,
            [name]: file,
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }


    return(
    <Box id="BackgroundCheckForm"  
         sx={{display: 'grid',
              rowGap: 2, 
              justifyContent: "center",
              fontFamily: "sans-serif",
              paddingRight: "5vw",
              paddingLeft: "5vw",
              paddingBottom: "3vh"}}>
        <Grid>
            <h3 style={{color: "#337ab7"}}>Go Back to Contact Card</h3> {/* Add link */}
            <hr style={{borderColor: "rgba(242, 242, 242, 0.45)"}}/>
        </Grid>
        <form onSubmit={handleSubmit}>
        <Grid>
            <h2>TestTutorFirst TestTutorLast's Background Check:</h2> {/* Fetch Tutor name ? */}
            <p>
                * Did you confirm that their transcript belongs to a bachelor's degree program and was issued
                by a University / College?
            </p>

            <input type="radio" id="transcriptChoice1"name="transcript" value="Yes" onChange={handleInputChange} required/>
            <label for="transcriptChoice1">Yes</label>
            <br />
            <input type="radio" id="transcriptChoice2"name="transcript" value="No" onChange={handleInputChange} required/> 
            <label for="transcriptChoice2">No</label>
            <Hr/>
        </Grid>

        <Grid>
            <p> * Did you perform a google search of their name? </p>

            <input type="radio" id="gSearchChoice1"name="gSearch" value="Yes" onChange={handleInputChange} required/>
            <label for="gSearchChoice1">Yes</label>
            <br />
            <input type="radio" id="gSearchChoice2"name="gSearch" value="No" onChange={handleInputChange} required/> 
            <label for="gSearchChoice2">No</label>
            <Hr/>
        </Grid>

        
        <Grid>
            <p> * Did you look them up on LinkedIn? </p>

            <input type="radio" id="linkedInChoice1"name="linkedIn" value="Yes" onChange={handleInputChange} required/>
            <label for="linkedInChoice1">Yes</label>
            <br />
            <input type="radio" id="linkedInChoice2"name="linkedIn" value="No" onChange={handleInputChange} required/> 
            <label for="linkedInChoice2">No</label>
            <Hr/>
        </Grid>

        
        <Grid>
            <div>
                Search for the student's name in the National Sex offender database:
                https://www.nsopw.gov/. <br/>
                If anything questionable appears, print the search as a PDF and upload here. 
                If not, you may skip this step.
            </div>
            <br/>               
            <input type="file" name="NSOD" accept=".pdf" onChange={handleFileChange} />
            <Hr/>
        </Grid>
                
        <Grid>
            <div>
                Google the state and public criminal records. Make sure the site ends in .gov. <br/>
                If there is nothing for state-level, find out if there is anything for their county or town. <br/>
                If anything questionable appears, print the search as a PDF and upload here.
                If not, you may skip this step.
            </div>
            <br/>
            <input type="file" name="criminalRec" accept=".pdf" onChange={handleFileChange} />
            <Hr/>
        </Grid>

        <Grid>
            <p>* Overall Opinion of Interviewer:</p>
            <input type="radio" id="opinionChoice1"name="opinion" value="Positive" onChange={handleInputChange} required/>
            <label for="opinionChoice1">Positive</label>
            <br />
            <input type="radio" id="opinionChoice2"name="opinion" value="Neutral" onChange={handleInputChange} required/> 
            <label for="opinionChoice2">Neutral</label>
            <br/>
            <input type="radio" id="opinionChoice3"name="opinion" value="Negative" onChange={handleInputChange} required/> 
            <label for="opinionChoice3">Negative</label>
        </Grid>

        <Grid>
            <br/>
            <label for="concernsText">Concerns of Interviewer:</label>
            <TextField variant="outlined" id="concernsText" name="concerns" onChange={handleInputChange} multiline fullWidth/>
        </Grid>
        <br />
        <input type="submit" value="Submit Background Check / Save Progress" /> 
        <p>* Indicates required field for completion...</p>
        </form>

   </Box>
    ); 
    
}

export default BackgroundCheck;