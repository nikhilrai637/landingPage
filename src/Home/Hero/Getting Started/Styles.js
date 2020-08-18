import { makeStyles } from '@material-ui/core/styles';

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
        backgroundImage: 'url("src\Home\Domains\IMAGES\DS_ALGO.jpeg")',

        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },

    
   
    }));
