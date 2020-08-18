import { makeStyles } from '@material-ui/core/styles';
import img from './Art_Work.png'
export const useStyles = makeStyles((theme) => ({

    headstyles:{
        textAlign:"center",

    },

    textcolor:{
        fontWeight:"700",
        fontSize: "20px",
        color: "white",
        marginTop: "6rem",
        marginBottom: "100px",

    },
    image: {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
         height:"40vh",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    

 

     
    }));
