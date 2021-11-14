import React from "react";
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import { cyan } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';


export default function setUp(){
    const theme = createTheme({
        palette: {
          primary: cyan,
        },
      });

    const page = 0;
    return(
        page == 0 ? <Button variant="outlined" sx={{m:20, p:.99}}>
            Start Importing Student/Teachers 
        </Button> :
        <div>
            <Box sx={{mt:25, ml:10}} >
            <Typography variant="body1" >
                Courses CSV file:
                <br/>
                <input
                    id="upload-courses"  
                    name="choose File"
                    type="file"
                />
            </Typography>
            </Box>

            <Box sx={{mt: -5.9, ml:35}} >
            <Typography variant="body1" >
                Teacher CSV file:
                <br/>
                <input
                    id="upload-teacher"  
                    name="choose File"
                    type="file"
                />
            </Typography>
            </Box>
          

            <Box sx={{mt: -5.9, ml:60}} >
            <Typography variant="body1" >
                Student CSV file:
                <br/>
                <input
                    id="upload-student"  
                    name="choose File"
                    type="file"
                />
            </Typography>
            </Box>

            <Box sx={{mt: -5.9, ml:85}} >
            <Typography variant="body1" >
                Advisors CSV file:
                <br/>
                <input
                    id="upload-advisors"  
                    name="choose File"
                    type="file"
                />
            </Typography>
            </Box>

            <Button variant="outlined" sx={{mt:-35, ml:10}} startIcon={<DownloadIcon/>}>
                <Typography variant="body2">Download Template CSV
                </Typography>
            </Button>

            <ThemeProvider theme={theme}>
            <Button variant="outlined" sx={{mt:-35, ml:10}} startIcon={<RemoveRedEyeSharpIcon/>} 
            >
                <Typography variant="body2">View Template CSV
                </Typography>
            </Button>
            </ThemeProvider>
            <div>
            <Button variant="contained" disableElevation sx={{mt:20, ml:10}}>
                next
            </Button>
            </div>
        </div>
         
    );
}