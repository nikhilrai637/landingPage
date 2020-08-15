import React from 'react'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'
import Component3 from './Component3/Component3'
import {Grid} from "@material-ui/core";


function Page3() {
    return (
        <div>
             <Grid container justify="center">
                  <Grid item xs={12} sm={8} style={{textAlign:"center"}}>
                      <Typography>
                       <h1 style={{paddingBottom:"60px"}}>What's there for you.</h1>
                      </Typography>
                  </Grid>
              </Grid>


     <Grid container>
      <Grid item sm={2} xs={2}/>
      <Grid item container xs={8} sm={8} spacing={6}>
          <Grid container>
              <Grid item sm={5}>Y
                  <Component1 />
                  
              </Grid>
              <Grid container direction="row" justify="flex-end" alignItems="center" sm={6}>
                 <Typography>
                     <h1>Comprehensive Career Guide</h1>
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
              
              <Grid container direction="row" justify="flex-start" alignItems="center" sm={6}>
                 <Typography>
                     <h1>Comprehensive Career Guide</h1>
                 </Typography>

              </Grid>
              <Grid item sm={5}>
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
              <Grid item sm={5}>Y
                  <Component3 />
                  
              </Grid>
              <Grid container direction="row" justify="flex-end" alignItems="center" sm={6}>
                 <Typography>
                     <h1>Comprehensive Career Guide</h1>
                 </Typography>

              </Grid>
          </Grid>
    
      </Grid>
      <Grid item sm={2} xs={2} />
      </Grid>






          
           
            <Component3/>
            
        </div>
    )
}

export default Page3
