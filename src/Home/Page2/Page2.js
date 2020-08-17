import React from 'react'
import Component2 from './Component2/Component2'
import Component4 from './Component4/Component4'
import Component6 from './Component6/Component6'
import Component5 from './Component5/Component5'
import Component3 from './Component3/Component3'
import Component1 from './Component1/Component1'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({


  heading:{

     marginBottom:"100px",

  },
 
  }));

function Page2() {

  const classes = useStyles();
    return (
        <div className={classes.heading}>
            <Grid container justify="center">
                  <Grid item xs={12} sm={8} style={{textAlign:"center"}}>
                      <Typography>
                        <Divider />
                       <h1 style={{paddingBottom:"60px"}}>Choose your domain and start preparing</h1>
                      </Typography>
                  </Grid>
              </Grid>

     <Grid container>
      <Grid item sm={2} xs={2} />
      <Grid item  container xs={10} sm={8} spacing={10}>
       
          <Grid item xs={12} sm={4} md={4} >
            <Component1 />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Component2 />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Component3 />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Component4 />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Component5 />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Component6 />
          </Grid>
        
      </Grid>
      <Grid item sm={2} xs={2} />
      </Grid>
        

            
           
        </div>
    )
}

export default Page2
