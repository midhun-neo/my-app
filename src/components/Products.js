
import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    },
    thumb: {
        width: 50,
        height : 50,
    }
});


export default function Products() {
    useEffect(() => {
      fetchItems()
    }, [])

    const classes = useStyles();

    const [items,setItems] = useState([])
    const fetchItems = async () => { 
        const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        const items = await data.json()
        console.log(items.drinks)
        setItems(items.drinks)
    }
    
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Drink Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Glass Type</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.idDrink}>
              <TableCell component="th" scope="row">
                {row.strDrink}
              </TableCell>
              <TableCell align="right">{row.strAlcoholic}</TableCell>
              <TableCell align="right">{row.strCategory}</TableCell>
              <TableCell align="right">{row.strGlass}</TableCell>
                  <TableCell align="right"><img className={classes.thumb} src={row.strDrinkThumb} alt={row.strDrink}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}