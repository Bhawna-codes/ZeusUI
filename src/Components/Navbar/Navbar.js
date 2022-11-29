import { Grid } from "@mui/material";
import React from "react";
import "./Navbar.css";
import Home from "./Home";
import University from "./University";
import Course from "./Course";
import Logo from "./Logo";
import UseCases from "./UseCases";
import Plans from "./Plans";
import Resources from "./Resources";

const Navbar = () => {
  return (
    <Grid container style={{ }}>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{}}
        style={{  }}
        textAlign="center" 
      >
        <Grid container >
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            style= {{alignSelf : "center", fontFamily: 'sans-serif'}}
          >
             
             <Grid container>
             <Grid  item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
              <Home />
            </Grid>
            <Grid  item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
              <University />
            </Grid>
            <Grid  item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
              <Course />
            </Grid>

             </Grid>
         
          </Grid>

          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            style={{ }}
          >
            <Grid>
              <Logo />
            </Grid>
          </Grid>

          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            style={{ alignSelf : "center", fontFamily: 'sans-serif' }}
          >
            
            <Grid container>
             <Grid  item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
              <UseCases/>
            </Grid>
            <Grid  item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
              <Plans />
            </Grid>
            <Grid  item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}>
              <Resources />
            </Grid>

             </Grid>
           
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
