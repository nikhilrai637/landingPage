import React from 'react'
import CentralParagraph from './CentralParagraph'
import LowerComponent from './LowerComponent/LowerComponent'
import { Grid, Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

   styles:{
       marginBottom:"10rem",
   },
   
    }));
function About() {
    const classes =useStyles();
    return (
        <div>
            

        <Grid item container>
            <Grid item xs={2} />
               <Grid item xs={8}>
                   <Divider style={{marginBottom:"20px"}} />
                   <Paper elevation={3} variant="elevation"  className={classes.styles}>
                       
                   <Grid container justify="center">
                  <Grid item xs={12}  sm={8} style={{textAlign:"center"}}>
                      <Typography>
                          <h1 className={classes.styles}>About Us</h1>
                          <p className={classes.styles}>We are a group of IIT IIM alumni with +15 years of 
                              combined  work experience across global software comapnies,
                              investment bank and next-gen(unicorn) startups across EdTech,FoodTech
                              and FinTech.
                          </p>
                      </Typography>
                  </Grid>
              </Grid>
                   </Paper>
                  
             </Grid>
                <Grid item xs={2} />
              </Grid>
              <Divider />
             
            
        </div>
    )
}

export default About
