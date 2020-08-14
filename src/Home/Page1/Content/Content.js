import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    headstyles:{
        textAlign:"center",

    },

    textcolor:{
        color: "white",
        marginTop: "40px",

    },
   
    }));

  const Content =() =>{
    const classes = useStyles();
  
    return (
        

             <Grid item container>
            <Grid item xs={2} />
               <Grid item xs={8}>
                   <Typography>
                   <h1 className={classes.headstyles}>Set your job preparation on the right track</h1>
                  </Typography>
  
              </Grid>
              <Grid container justify="center">
                  <Grid item xs={3} style={{textAlign:"center"}}>
                      <Typography>
                         <h2> Cracking an interview is tough.</h2>
                         <h4>We at Cache Prep help you crack it with clarity,convenience and confidence.</h4>
                      </Typography>
                  </Grid>
              </Grid>
             
                <Grid item xs={2} />

            </Grid>

       

        );
    };
     export default Content;
