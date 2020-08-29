import React from 'react';
import NavBar from "./navbar";
import {Box,Typography} from '@material-ui/core';

const Contacts=()=>(
    <Box>
        <NavBar/>
        <Typography variant="h4" align="center" style={{color:"#fff"}}>Contact Me!</Typography>
       
    </Box>
)

export default Contacts;