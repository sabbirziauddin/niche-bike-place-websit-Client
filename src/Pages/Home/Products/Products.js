import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';
import Typography from '@mui/material/Typography';







const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-oasis-52476.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))

    }, [])
    const homeProducts = allProducts.slice(0,6);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography className='text-primary my-5'  sx={{ fontWeight: "600" }} variant="h3" component="div">
                    Our best Products{allProducts.length}
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    
                    {
                        homeProducts.map(item=><Product 
                            key={item.price}
                            item={item}></Product>)
                    
                    
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;