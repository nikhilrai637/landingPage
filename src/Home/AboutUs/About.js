import React from 'react'
import CentralParagraph from './CentralParagraph'
import LowerComponent from './LowerComponent/LowerComponent'
import { Grid, Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core';
import { Divider } from '@material-ui/core';

function About() {
    return (
        <div>
            

        <Grid item container>
            <Grid item xs={2} />
               <Grid item xs={8}>
                   <Divider style={{marginBottom:"20px"}} />
                   <Paper elevation={3} variant="elevation" square>
                       
                   <Grid container justify="center">
                  <Grid item xs={3}  sm={8} style={{textAlign:"center"}}>
                      <Typography>
                          <h1>About Us</h1>
                          <p> We are a group of IIT and IIM Alumni</p>
                      </Typography>
                  </Grid>
              </Grid>
                   </Paper>
                  
                  </Grid>
                <Grid item xs={2} />
              </Grid>
            

            <CentralParagraph/>
            <LowerComponent/>
        </div>
    )
}

export default About
