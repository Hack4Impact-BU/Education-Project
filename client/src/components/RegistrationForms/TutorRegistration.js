import { Grid, Box, Button } from '@mui/material';
import React, { Component } from 'react';
import "../../static/TutorRegistration.css";


export default class TutorRegistration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subjects: [
                "Mathematics",
                "Biology",
                "Chemistry",
                "Physics",
                "English",
                "History",
                "Geography",
                "Computer Science",
                "General Education"
            ],
            gradeLevels: [
                "Elementary School (k-5)",
                "Middle School (6-8)",
                "High School (9-12)"
            ],
            languages: [
                "English",
                "Spanish",
                "Mandarin",
                "Cantanese",
                "Hindi",
                "Tagalog",
                "Vietnamese",
                "Arabic",
                "French",
                "Korean",
                "Russian",
                "German",
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

        const { subjects, languages, gradeLevels } = this.state;

        const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

        return (
            <Box id="TutorRegistrationForm">
                <h2>Tutor Registration Form</h2>

                <div id="TutorRegDescription">
                    {description}
                </div>

                <form name="TutorRegistration" onSubmit={this.handleSubmit}>
                    <Box sx={{
                        display: 'grid',
                        rowGap: 2
                    }}>

                        <Grid container>
                            <Grid xs={3}>
                                <label className="labelClass">* First name</label>
                                <input type="text" name="firstName" onChange={this.handlechange} />
                            </Grid>

                            <Grid xs={3}>
                                <label className="labelClass">* Last Name </label>
                                <input type="text" name="lastName" onChange={this.handlechange} />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid xs={3}>
                                <label className="labelClass">* Email </label>
                                <input type="email" name="email" onChange={this.handlechange} />
                            </Grid>
                            <Grid xs={4.5}>
                                <label className="labelClass">* Phone Number (Format: 123-456-7890)</label>
                                <input type="phone" name="phone" />
                            </Grid>
                            <Grid xs={3}>
                                <label className="labelClass">* State/Territory of Residence </label>
                                <input type="text" name="state" onChange={this.handlechange} />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={5}>
                                <label className="labelClass">* College/University/Highschool</label>
                                <input type="text" name="school" onChange={this.handlechange} />
                            </Grid>
                            <Grid xs={3}>
                                <label className="labelClass">Field of Study</label>
                                <input type="text" name="field" onChange={this.handlechange} />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid xs={5}>
                                <label className="labelClass"> Profession Title (Please select most applicable)</label>
                                <select name="profTitle" form="tutorRegistration" id="selectDropDown">
                                    <option>Select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </Grid>

                            <Grid xs={3}>
                                <label className="labelClass"> Profession Title:</label>
                                <input type="text" name="progTitleTxt" onChange={this.handlechange} />
                            </Grid>
                        </Grid>

                        <Grid>
                            <label className="labelClass">* Tutorable Subjects</label>
                            {subjects.map((name, ind) => {
                                return (
                                    <span>
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind} value={name} />
                                        <label key={ind + subjects.length}>{name}</label>
                                    </span>
                                )
                            })}
                            <span id="otherSubjectsSpan">
                                <input type="checkbox" className="checkboxLabelClass" name="other" />
                                <label>Other (ex. Music, Language, etc.)</label>
                                <input type="text" name="otherSubjects" id="otherSubjects" onChange={this.handlechange} />
                            </span>
                        </Grid>

                        <Grid>
                            <label className="labelClass">* Tutorable Grade Levels</label>
                            {gradeLevels.map((name, ind) => {
                                return (
                                    <span>
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind} value={name} />
                                        <label key={ind + gradeLevels.length}>{name}</label>
                                    </span>
                                )
                            })}
                        </Grid>

                        <Grid>
                            <label className="labelClass">* Spoken Languages</label>
                            {languages.map((name, ind) => {
                                return (
                                    <span>
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind} value={name} />
                                        <label key={ind + languages.length}>{name}</label>
                                    </span>
                                )
                            })}
                            <span id="otherSubjectsSpan">
                                <input type="checkbox" className="checkboxLabelClass" name="other" />
                                <label>Other</label>
                                <input type="text" name="otherSubjects" id="otherLanguages" />
                            </span>
                        </Grid>

                        <label className="className">* Please Upload either a PDF of your Unofficial Transcitp or

                            Proof of Employmenrt Max file size for each is 5MB
                        </label>
                        <Grid container>
                            <Grid xs={3}>
                                <label className="labelClass">Unoffical Transcript:</label>
                                <input type="file" className="fileUpload" name="transcript" />
                            </Grid>
                            <Grid xs={3}>
                                <label className="labelClass">Proof of Employment:</label>
                                <input type="file" className="fileUpload" name="employment" />
                            </Grid>
                            <Grid xs={3}>
                                <label className="labelClass">Resume:</label>
                                <input type="file" className="fileUpload" name="resume" />
                            </Grid>
                        </Grid>

                        <Grid>
                            <label className="labelClass">How did you hear about us?(optional)</label>
                            <textarea name="hear" id="optionalText" onChange={this.handlechange} />
                        </Grid>


                        <input type="submit" value="submit" id="submitButton" />

                    </Box>
                </form >
            </Box >
        )
    }
}


