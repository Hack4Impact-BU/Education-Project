import { Grid, Box, div } from '@mui/material';
import React, { Component } from 'react';
import "./static/TutorRegistration.css";
import axios from "axios"


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
            acknowledgements_links: [
                "link1",
                "link2"
            ],
            form: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                school: "",
                state: "",
                field: "",
                profession: "",
                subjects: {
                    Mathematics: false,
                    Biology: false,
                    Chemistry: false,
                    Physics: false,
                    English: false,
                    History: false,
                    Geography: false,
                    ComputerScience: false,
                    GeneralEducation: false
                },
                gradeLevels: {
                    elementry: false,
                    middelschool: false,
                    highschool: false

                },
                languages: {
                    English: false,
                    Spanish: false,
                    Mandarin: false,
                    Cantanese: false,
                    Hindi: false,
                    Tagalog: false,
                    Vietnamese: false,
                    Arabic: false,
                    French: false,
                    Korean: false,
                    Russian: false,
                    German: false
                },
                transcript: null,
                resume: null,
                employment: null,
                hearAbtUs: "",
                timezone: "",
                acknowledgments: {
                    link1: false,
                    link2: false
                }
            }
        }
    }

    handleSubmit = () => {

        const form = this.state.form;

        const date = new Date();
        const dateAsString = date.toString();
        const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

        form['timezone'] = timezone;

        if (!form.acknowledgments.link1 || !form.acknowledgments.link2) {
            console.log("Please read the terms and conditions");
            // TODO: indicate error on screen

            return;
        }

        axios.post("http://localhost:8080/tutorRegistration", form)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))

    }

    handlechange = (evt) => {
        const value = evt.target.value;
        const form = this.state.form;
        form[evt.target.name] = value;

        this.setstate = { form: form }
    }

    handlecheck = (namep, fieldp) => {
        const form = this.state.form;

        let name = namep;
        let field = fieldp;

        if (fieldp === "gradeLevels") {
            switch (namep) {
                case "Elementary School (k-5)":
                    name = "elementary";
                    break;
                case "Middle School (6-8)":
                    name = "middleschool";
                    break;
                case "High School (9-12)":
                    name = "highschool";
                    break;
            }
        }

        if (name === "Computer Science") {
            name = "ComputerScience";
        }

        if (name === "General Education") {
            name = "GeneralEducation";
        }

        form[field][name] = true;
        this.setstate = { form: form }

    }

    onFileChange = (evt) => {
        const form = this.state.form;

        form[evt.target.name] = evt.target.files[0];

        this.setState = { form: form }

    }

    render() {

        const { subjects, languages, gradeLevels, acknowledgements_links } = this.state;

        const description = `Please fill out the form below with your information and the subjects you 
        would be comfortable tutoring. Professionals, graduate students, college
        students, and high school seniors with a college acceptance are
        eligible to apply. We requre proof to verify this information
        (unofficial transcript or proof employment) and may also invite
        you for an informal interview or reference check. Once your
        application is processed, we'll set up a virtual orientation
        to get you up to speed with how to get started as a tutor.`;

        return (
            <Box id="TutorRegistrationForm">
                <h2>Tutor Registration Form</h2>

                <div id="TutorRegDescription">
                    {description}
                </div>

                <div name="TutorRegistration">
                    <Box sx={{
                        display: 'grid',
                        rowGap: 2
                    }}>

                        <Grid container>
                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass">* First name</label>
                                    <input type="text" name="firstName" onChange={this.handlechange} />
                                </div>
                            </Grid>

                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass">* Last Name </label>
                                    <input type="text" name="lastName" onChange={this.handlechange} />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass">* Email </label>
                                    <input type="email" name="email" onChange={this.handlechange} />
                                </div>
                            </Grid>
                            <Grid xs={4.5}>
                                <div>
                                    <label className="labelClass">* Phone Number (Format: 123-456-7890)</label>
                                    <input type="phone" name="phone" onChange={this.handlechange} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div>
                                    <label className="labelClass">* State/Territory of Residence </label>
                                    <input type="text" name="state" onChange={this.handlechange} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={5}>
                                <div>
                                    <label className="labelClass">* College/University/Highschool</label>
                                    <input type="text" name="school" onChange={this.handlechange} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass">Field of Study</label>
                                    <input type="text" name="field" onChange={this.handlechange} />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass"> Profession Title: </label>
                                    <input type="text" name="profession" onChange={this.handlechange} />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid>
                            <label className="labelClass">* Tutorable Subjects</label>
                            {subjects.map((name, ind) => {
                                return (
                                    <span name="subjects">
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind + 1000} value={name} onChange={() => this.handlecheck(name, "subjects")} />
                                        <label key={(ind + subjects.length).toString()}>{name}</label>
                                    </span>
                                )
                            })}
                            <span id="otherSubjectsSpan">
                                <input type="checkbox" className="checkboxLabelClass" name="other" />
                                <label>Other (ex.Music, Language, etc.)</label>
                                <input type="text" name="otherSubjects" id="otherSubjects" onChange={this.handlechange} />
                            </span>
                        </Grid>

                        <Grid>
                            <label className="labelClass">* Tutorable Grade Levels</label>
                            {gradeLevels.map((name, ind) => {
                                return (
                                    <span>
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind + 2000} value={name}
                                            onChange={() => this.handlecheck(name, "gradeLevels")} />
                                        <label key={(ind + gradeLevels.length + 100).toString()}>{name}</label>
                                    </span>
                                )
                            })}
                        </Grid>

                        <Grid>
                            <label className="labelClass">* Spoken Languages</label>
                            {languages.map((name, ind) => {
                                return (
                                    <span>
                                        <input type="checkbox" className="checkboxLabelClass" name={name} key={ind + 3000} value={name}
                                            onChange={() => this.handlecheck(name, "languages")} />
                                        <label key={(ind + languages.length + 200).toString()}>{name}</label>
                                    </span>
                                )
                            })}
                            <span id="otherSubjectsSpan">
                                <input type="checkbox" className="checkboxLabelClass" name="other" onChange={this.handlechange} />
                                <label>Other</label>
                                <input type="text" name="otherSubjects" id="otherLanguages" />
                            </span>
                        </Grid>

                        <label className="className">* Please Upload either a PDF of your Unofficial Transcitp or

                            Proof of Employmenrt Max file size for each is 5MB
                        </label>
                        <Grid container>
                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass">Unoffical Transcript: </label>
                                    <input type="file" className="fileUpload" name="transcript" onChange={this.onFileChange} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass">Proof of Employment: </label>
                                    <input type="file" className="fileUpload" name="employment" onChange={this.onFileChange} />
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div>

                                    <label className="labelClass">Resume: </label>
                                    <input type="file" className="fileUpload" name="resume" onChange={this.onFileChange} />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid>
                            <label className="labelClass">How did you hear about us?(optional)</label>
                            <textarea name="hearAbtUs" id="optionalText" onChange={this.handlechange} />
                        </Grid>

                        <Grid>
                            <label className="labelClass">* Acknowledgements</label>
                            {acknowledgements_links.map((link, ind) => {
                                return (
                                    <div>
                                        <input type="checkbox" name={link} onChange={() => this.handlecheck(link, "acknowledgments")} />
                                        <label>I have read and agree to the link</label>
                                    </div>
                                )
                            })}
                        </Grid>

                        <button id="submitButton" onClick={this.handleSubmit}>Submit</button>

                    </Box>
                </div >
            </Box >
        )
    }
}


