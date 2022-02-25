import React from 'react';
import Button from '@mui/material/Button';

class CSVParser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            CSVData: null,
        };
    }

    onFileSelect = () => {
        const fileElem = document.getElementById("fileElem");
        if (fileElem) {
            fileElem.click();
        }
    }

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] }, this.onFileUpload);
    };

    onFileUpload = () => {
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({ CSVData: this.csvToArray(reader.result) });

        };
        if (this.state.selectedFile) {
            reader.readAsText(this.state.selectedFile);
        }
    }

    displayData = () => {
        const content = document.querySelector('.content');
        content.innerText = 'CSV File Data:\n\n' + this.state.CSVData;
        console.log(this.state.CSVData);
    }

    csvToArray = (str) => {
        const arr1 = str.split("\n");
        console.log(arr1);
        // let ret = [];
        // for (let i = 0; i < arr1.length; i++) {
        //     const arr2 = str.split(",").map(item => item.trim());
        //     for (let j = 0; j < arr2.length; j++) {
        //         arr2[j] = arr2[j].replace(/['"]+/g, '');
        //     }
        //     ret.push(arr2);
        // }
        // return ret;
        // const arr2 = str.split(",").map(item => item.trim());
        // for (let j = 0; j < arr2.length; j++) {
        //     arr2[j] = arr2[j].replace(/['"]+/g, '');
        // }
        // return arr2;
    }

    render() {
        return (
            <div>
                <h2>Setup</h2>
                <p>Hello Admin,</p>
                <p>There are no teachers or students entered that are setup for the advanced system features.</p>
                <div>
                    <input type="file" id="fileElem" accept=".csv" style={{display:'none'}} onChange={this.onFileChange} />
                    <Button variant='outlined' id="fileSelect" onClick={this.onFileSelect}>Start Importing Student / Teachers</Button>
                </div>
                <p className="content">CSV File Data: [USE /n]<br/><br/>No File Imported</p>
                <button onClick={this.displayData}>Display Data</button>
            </div>
        )
    }
}

export default CSVParser;