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

  const GettingStarted =() =>{
    const classes = useStyles();
  
    return (
        

             <Grid item container>
            <Grid item xs={2} />
               <Grid item xs={8}>
                  
              <Grid container justify="center">
                  <Grid item xs={3} style={{textAlign:"center"}}>
                     <Button variant="contained" color="secondary" className={classes.textcolor}>GET STARTED.</Button>
                  </Grid>
              </Grid>
                <Grid item xs={2} />

            </Grid>
            </Grid>

       

        );
    };
     export default GettingStarted;