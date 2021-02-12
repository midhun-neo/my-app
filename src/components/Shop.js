import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ItemCard from "./ItemCard"
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,   
        '& > *': {
            marginTop: theme.spacing(2),
        }    
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cardGrid: {
        padding: theme.spacing(2),
    }
  }));

function Shop() {

    useEffect(() => {
        fetchItems()
    }, [])
    
    const classes = useStyles();

    const [items, setItems] = useState([])
    

    const fetchItems = async () => { 
        const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        const items = await data.json()
        console.log(items.drinks)
        setItems(items.drinks)
    }


    
    return (   
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {items.map((item) => (
                        <Grid item key={item.idDrink} xs={12} sm={6} md={4}>
                        <ItemCard item={item} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={4} >
                    <div className={classes.root}>
                        <Pagination count={10} />
                        <Pagination count={10} color="primary" />
                        <Pagination count={10} color="secondary" />
                        <Pagination count={10} disabled />
                    </div>
                </Grid>
            </Container>       
        
    )
}
export default Shop