import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";

import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({

    headstyles:{
        textAlign:"center",

    },

    textcolor:{
        fontWeight:"700",
        fontSize: "20px",
        color: "white",
        marginTop: "6rem",
        marginBottom: "400px",

    },
   
    }));

  const GettingStarted =() =>{
    const classes = useStyles();
  
    return (
        

             <Grid item container>
            <Grid item xs={2} />
               <Grid item xs={8}>
                  
              <Grid container justify="center">
                  <Grid item xs={12} style={{textAlign:"center"}}>
                      <Button variant="contained" color="secondary" className={classes.textcolor} href="/Get_Start">
                           GET STARTED
                         </Button>
                  </Grid>
              </Grid>
                <Grid item xs={2} />

            </Grid>
            </Grid>

       

        );
    };
     export default GettingStarted;