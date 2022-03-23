import { Grid, Box, Button } from '@mui/material';
import React, { Component } from 'react';
import "../../static/AdminTutorReferenceCheck.css";


export default class AdminTutorReferenceChecks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            yesNo: [
                "Yes",
                "No"
            ],
            opinion: [
                "Positive",
                "Neutral",
                "Negative"
            ],
            form: {
                firstName: "",
                lastName: "",
                email: "",
                school: "",
            }
        }

    }

    handleSubmit = () => {
        console.log(this.state.form);

    }

    handlechange = (evt) => {
        const value = evt.target.value;
        const form = this.state.form;
        form[evt.target.name] = value;

        this.setstate = { form: form }
    }

    render() {

        const { opinion, yesNo } = this.state;

                return (
            <Box id="AdminTutorRefForm">
                <h2>TestTutor2First TestTutor2Last's Reference Check: </h2>

               
                <form name="TutorRegistration" onSubmit={this.handleSubmit}>
                    <Box sx={{
                        display: 'grid',
                        rowGap: 2
                    }}>

                        <Grid container>
                            <Grid xs={15}>
                                <label className="labelClass">*What is the full name of the reference?</label>
                                <input type="text" name="FNRef" onChange={this.handlechange} />
                            </Grid>

                            <Grid xs={15}>
                                <label className="labelClass">* What is the relationship between the applicant and reference?</label>
                                <input type="text" name="relationship" onChange={this.handlechange} />
                            </Grid>
                        </Grid>
                        <label>______________________________________________________________________________________________________________</label>

                            <label reqFields="reqFields">Note this is not an automated message from our system....</label>
                            <label><b>Sample Email or Text</b></label>

                            <label>Hello XXX,</label>

                            <label>My name is YYY from The Education Project. I wanted to schedule a quick 5-minute call to conduct a reference check for Test Tutor2First Test Tutor2Last, as part of our onboarding process, who is being considered for the position of a volunteer tutor.</label>

                            <label>Please let me know your availablities in the next few days.</label>

                            <label>Regards,</label>

                            <label>YYY</label>
                            
                            <label>______________________________________________________________________________________________________________</label>
                            <label><b>Starting the call</b></label>

                            <label>Hi, my name is YYY and I'm calling to conduct a reference check for TestTutor2First TestTutor2Last, who is being considered for the position of a volunteer tutor. Your name has been provided by TestTutor2First TestTutor2Last, as a reference. The reference check will take approximately 5 minutes to complete.</label>

                        
                        

                        <Grid container>
                            <Grid xs={15}>
                                <label className="labelClass">* How long have you known the individual and in what capacity? </label>
                                <input type="text" name="duration" onChange={this.handlechange} />
                            </Grid>
                            <Grid xs={25}>
                                <label className="labelClass">* The applicant has appleid to volunteer with our organization in the role of mentoring and tutoring a student. Have you ever observed the candidate working in this type of role? Can you give examples of how you think they would perform?</label>
                                <input type="text" name="examples" />
                            </Grid>
                            
                        </Grid>
                        

                        <Grid>
                            <label className="labelClass">* Would you recommend this individual for volunteering in this position</label>
                            {yesNo.map((name, ind) => {
                                return (
                                    <span>
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind} value={name} />
                                        <label key={ind + yesNo.length}>{name}</label>
                                    </span>
                                )
                            })}
                        </Grid>

                        

                        <label thankYou="thank you">Thank you for taking time out of your day to provide this information.
                        </label>
                        <Grid>
                            <label className="labelClass">* Overall Opinion of Interviewer:</label>
                            {opinion.map((name, ind) => {
                                return (
                                    <span>
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind} value={name} />
                                        <label key={ind + opinion.length}>{name}</label>
                                    </span>
                                )
                            })}
                        </Grid>

                        <Grid container>
                            <Grid xs={15}>
                                <label className="labelClass">Concerns of Interviewer </label>
                                <input type="text" name="concerns" onChange={this.handlechange} />
                            </Grid>
                            
                        </Grid>
                        


                        <input type="submit" value="Submit Reference Check/Save Progress" id="submitButton" />
                        <label reqFields="reqFields">* Indicates required field for completion...
                        </label>

                    </Box>
                </form >
            </Box >
        )
    }
}


