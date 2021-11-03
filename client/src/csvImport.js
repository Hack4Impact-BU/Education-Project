import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'

class CSVImport extends React.Component {
    render() {
        return (
            <div>
                <Typography sx={{fontSize: 26, fontWeight: 'bold'}}>Setup</Typography>
                <Typography>Hello Admin,</Typography>
                <Typography>There are no teachers or students entered that are setup for the advanced system features.</Typography>
                <input
                    accept=".csv"
                    style={{ display: 'none' }}
                    id="outlined-button-file"
                    type="file"
                />
                <label htmlFor="outlined-button-file">
                    <Button variant="outlined" component="span">Start Importing Students / Teachers</Button>
                </label> 
            </div>
        )
    }
}

export default CSVImport;