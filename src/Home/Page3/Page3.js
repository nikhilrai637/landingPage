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
                       <h1 style={{paddingBottom:"60px"}}>Choose your domain and start preparing</h1>
                      </Typography>
                  </Grid>
              </Grid>
            <Component1/>
            <Component2/>
            <Component3/>
            
        </div>
    )
}

export default Page3
