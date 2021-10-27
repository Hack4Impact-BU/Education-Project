import React from "react";
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function setUp(){
    const page = 0;
    return(
        page == 0 ? <Button variant="outlined" sx={{m:20, p:.99}}>
            Start Importing Student/Teachers 
        </Button> :
        <div>
            {/* <h1>harro</h1>
            <h1>hello</h1> */}
        </div>
                
    );
}