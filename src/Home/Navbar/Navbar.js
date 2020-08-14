import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import {makeStyles} from "@material-ui/styles";
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme =>({
    typographyStyles:{  
       marginLeft: "auto",
    },
    font:{
    
        fontWeight: "700",

    },


}));

const Navbar =() =>{
    const classes= useStyles();
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography color="primary" variant="h4" className={classes.font} >
                   cache
                </Typography>
                <MenuItem className={classes.typographyStyles}><Link href="#" color="inherit">Contact Us</Link>
                </MenuItem>
                <MenuItem ><Link href="#" color="inherit">Sign Up</Link>
                </MenuItem>
               
             </Toolbar>
      </AppBar>

    );

};
 export default Navbar;