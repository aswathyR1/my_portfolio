import React from 'react';
import{Box,AppBar,Toolbar,IconButton,Typography,Avatar} from '@material-ui/core';
import{ArrowBack} from '@material-ui/icons';

import girl from '../girl.png'; 

const NavBar=()=>(
    <>
    <Box component="div">
        <Avatar src={girl} alt="Aswathy"/>
    </Box>
    <Box component="nav">
        <AppBar position="fixed" style={{background:'#222'}}>
            <Toolbar>
                <ArrowBack style={{color:'#fff'}}/>
              
                <IconButton/>
                <Typography variant="h5" color="primary">Portfolio</Typography>
            </Toolbar>
        </AppBar>

        
    </Box>
    </>
)

export default NavBar;