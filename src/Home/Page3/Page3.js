import React from 'react'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'
import Component3 from './Component3/Component3'
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({


    heading:{
       marginBottom:"100px",
  
    },
    space:{
        marginTop:"100px",
        marginLeft:"50px",
        
    },
    stylep:{
        marginLeft:"50px",
    },
   
    }));
function Page3() {

    const classes = useStyles();
    return (


        <div>

             <Grid container justify="center">
                  <Grid item xs={12} sm={8} style={{textAlign:"center"}}>
                      <Typography>
                          <Divider />
                            <h1 className={classes.heading}>What's there for you</h1>
                      </Typography>
                  </Grid>
              </Grid>


     <Grid container>
      <Grid item sm={2} xs={2}/>
      <Grid item container xs={8} sm={8} spacing={8}>
          <Grid container>
              <Grid item sm={5}>
                  <Component1 />
                  
              </Grid>
              <Grid container direction="row" justify="flex-end" alignItems="flex-start" sm={6} >
                 <Typography>
                     <h1 className={classes.space}>Comprehensive Career Guide</h1>
                     <h4 className={classes.stylep}>Preparing for a job goes beyond learning materials. We help you with practice pathways to prioritize the skills
                         to learn and perform best at the interview.
                     </h4>
                 </Typography>

              </Grid>
          </Grid>
    
      </Grid>
      <Grid item sm={2} xs={2} />
      </Grid>
      

      <Grid container>
      <Grid item sm={2} xs={2}/>
      <Grid item container xs={8} sm={8} spacing={6}>
          <Grid container>
              
              <Grid container direction="row" justify="flex-start" alignItems="flex-start" sm={6}>
                 <Typography>
                     <h1 style={{marginTop:"100px"}}>Connect with Professionals</h1>
                     <h4>Preparing for a job goes beyond learning materials. We help you with practice pathways to prioritize the skills
                         to learn and perform best at the interview.</h4>
                 </Typography>

              </Grid>
              <Grid item sm={5} style={{marginLeft:"10px"}}>
                  <Component2 />
                  

              </Grid>
          </Grid>
    
      </Grid>
      <Grid item sm={2} xs={2} />
      </Grid>
      
      <Grid container>
      <Grid item sm={2} xs={2}/>
      <Grid item container xs={8} sm={8} spacing={6}>
          <Grid container>
              <Grid item sm={5}>
                  <Component3 />
                  
              </Grid>
              <Grid container direction="row" justify="flex-end" alignItems="flex-start" sm={6}>
                 <Typography>
                     <h1 className={classes.space}>Crack Interviews</h1>
                 </Typography>

              </Grid>
          </Grid>
    
      </Grid>
      <Grid item sm={2} xs={2} />
      </Grid>

          
           
        </div>
    )
}

export default Page3;
