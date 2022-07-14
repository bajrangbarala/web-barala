import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cart: {
    background: '#319D8E !important',
    color: '#fff !important',
    borderRadius: '10px !important',
    fontSize: '20px !important',
    fontWeight: '400 !important',
    textTransform: 'capitalize!important',
    padding: '5px 15px !important',
},
buy:{
  display:'flex',
  justifyContent:'space-between'
}
})

const Home = () => {
  const classes = useStyles();
  return (
    <Card sx={{ margin:'60px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image="./callphaone.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>Deal Price:</span><span class="a-offscreen">₹19,999.00</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buy}>
      <Button className={classes.cart} size="small" color="primary">
          Add to Cart
        </Button>
        <Button className={classes.cart} size="small" color="primary">
          Buy Now 
        </Button>
      </CardActions>
    </Card>
  );
}
export default Home

