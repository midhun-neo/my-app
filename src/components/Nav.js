import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import TopMenu from './TopMenu'
import '../styles/App.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white"
    },
    title: {
        flexGrow : 1
    }
}))

export default function Nav() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Made in Heaven
                    </Typography>
                    <TopMenu/> 
                </Toolbar>
            </AppBar>
        </div>   
    )
}

 /* <nav className="navbar navbar-expand-lg editor-navbar">
            <Link to="/">
            <img src="../" alt="logo"/>          
            </Link>

            <Link to="/">
                <h3 className="logo">My Shop</h3>
            </Link>

            <ul className="nav-link">
                <Link to="/about">
                    <li>
                    About
                    </li>
                </Link>    
                <Link to="/shop">
                    <li>Shop</li>
                </Link>    
            
            </ul>
            </nav> */
