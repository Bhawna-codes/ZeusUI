import React from 'react';
import './Logo.css';
import { Grid } from '@mui/material';
import logo from '../Images/Logo.png';
// import logoText from '../Images/LogoText.png'

const Logo = () => {
  return (
    <Grid> 
        <img src= {logo} width = "40%" height = "40%"/>
        {/* <img src= {logoText} /> */}


    </Grid>
  )
}

export default Logo