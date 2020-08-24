import { makeStyles } from '@material-ui/core/styles';
export const   useStyles = makeStyles(() => ({


    heading:{
       marginBottom:"100px",
  
    },
    root: {
        minWidth: 225,
        borderRadius: "10%",
        marginBottom: "100px",
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    }));