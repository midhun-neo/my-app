import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/App.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



function ItemCard(props) {
    console.log(props)

   // <div>
   // <img className="thumb-img" src={props.item.strDrinkThumb} alt={props.item.strDrink}/>
   // {props.item.strDrink}
 
    const classes = useStyles();
    return (              
        
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.strDrinkThumb}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.item.strDrink}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.item.strInstructions}            
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
   
    )
}

export default ItemCard