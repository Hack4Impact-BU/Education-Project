import React from 'react'
import Button from '@mui/material/Button';

class CSVParser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            CSVData: null
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

    CSVToArray = (data, delimiter = ',', omitFirstRow = false) => {
        console.log(data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0).split('\n').map(v => v.split(delimiter)))
    }

    onFileUpload = () => {
        const content = document.querySelector('.content');
        const reader = new FileReader();
        reader.onload = function() {
            console.log(reader.result);
            content.innerText = 'CSV File Data:\n\n' + reader.result;
        };
        if (this.state.selectedFile) {
            reader.readAsText(this.state.selectedFile);
        }
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
                <p className="content">CSV File Data:<br/><br/>No File Imported</p>
            </div>
        )
    }
}

export default CSVParser;