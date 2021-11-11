import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MuiButton from '../../../styledComponent/MuiButton';
import BookingModals from '../BookingModals/BookingModals';


const Product = ({item}) => {
    const { name, description, img,price} = item;
    const [openPlacing, setOpenPlacing] = React.useState(false);
    const handlePlacingOpen = () => setOpenPlacing(true);
    const handlePlacingClose = () => setOpenPlacing(false);
    return (
        <>
            <Grid item xs={3} sm={4} md={4} >
                <Card sx={{ minWidth: 275 , boxShadow: 3}}>
                    <CardContent>

                        <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt="green iguana"
                        />

                        <Typography sx={{color:'Info.main'}} variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            ${price}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                            <br />

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <MuiButton onClick={handlePlacingOpen} sx={{ margin: 'auto' }}> order Now</MuiButton>
                    </CardActions>
                </Card>

            </Grid>
            <BookingModals 
            item={item}
            openPlacing={openPlacing}
            handlePlacingClose={handlePlacingClose} ></BookingModals>
        </>

        
        
    );
};

export default Product;