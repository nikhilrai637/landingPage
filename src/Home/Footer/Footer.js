

import React from 'react';
 
import {Grid} from "@material-ui/core";
import Link from '@material-ui/core/Link';


  const Content =() =>{
    
  
    return (
 
        
   <Grid container>
    <Grid item xs={2} sm={2} />
  
     <Grid item xs={4} sm={3} justify="center" alignItems="center" >
  
   <Link color="inherit"><h2>About</h2></Link>
   <Link color="inherit"><h2>Team</h2></Link>
   <Link color="inherit"><h2>Resources</h2></Link>
  

  </Grid>
  <Grid item  justify="center" alignItems="center" xs={2} sm={3}>
  
    <Link color="inherit"><h2>Blog</h2></Link>
    <Link color="inherit"><h2>Career</h2></Link>
    <Link color="inherit"><h2>Contact</h2></Link>

  </Grid>
  
  <Grid item  xs={8} sm={2} justify="flex-end" alignItems="flex-end">

  <Link color="inherit"><h2>Accessibilty</h2></Link>
    <Link color="inherit"><h2>Terms of Use</h2></Link>
    <Link color="inherit"><h2>Privacy</h2></Link>
    
  </Grid>
  <Grid item sm={3} />

 



</Grid>

       

        );
    };
     export default Content;
