import React from "react"
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link } from 'react-router-dom'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
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

function TopMenu() { 
    const classes = useStyles()
    return (
        <ButtonGroup variant="text" color="primary" aria-label="text button group">
        <Link to="/"><Button className={classes.menuButton}>Home</Button></Link>  
        <Link to="/about"><Button className={classes.menuButton}>About</Button></Link>  
        <Link to="/products"><Button className={classes.menuButton}>Products</Button></Link>  
        <Link to="/shop"><Button className={classes.menuButton}>Shop</Button></Link>  
        <Link to="/contact"><Button className={classes.menuButton}>Contact Us</Button></Link>  
        
    </ButtonGroup>
    )
}
export default TopMenu
