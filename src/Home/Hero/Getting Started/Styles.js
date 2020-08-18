import { makeStyles } from '@material-ui/core/styles';
import img from './art.png';
import zIndex from '@material-ui/core/styles/zIndex';
export const useStyles = makeStyles((theme) => ({

    headstyles:{
        textAlign:"center",

    },

    textcolor:{
        fontWeight:"700",
        fontSize: "20px",
        color: "white",
        marginTop: "2rem",
      

    },
    image: {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
         height:"40vh",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex:"2",
      },
    

 

     
    }));
