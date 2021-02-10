import React from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright'

 const useStyles = makeStyles((theme) => ({
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2),
            position: 'fixed',
            left: "0",
            bottom: "0",
            width: "100%"
        }
    }))

 function Footer() {    
    const classes = useStyles();
     
    return(
        <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            All rights reserved
            </Typography>
            <Copyright />
            </footer>
    )
 }

 export default Footer