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
        color: "white",
        marginTop: "40px",
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
                  <Grid item xs={3} style={{textAlign:"center"}}>
                     <Link to = "/Get_Start"><Button variant="contained" color="secondary" className={classes.textcolor}>GET STARTED.</Button></Link>
                  </Grid>
              </Grid>
                <Grid item xs={2} />

            </Grid>
            </Grid>

       

        );
    };
     export default GettingStarted;