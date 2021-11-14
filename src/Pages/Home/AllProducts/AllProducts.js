import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Alert, Container } from '@mui/material';
import Product from '../Product/Product';
import Navigation from '../../../Shared/Navigation/Navigation';
import Typography from '@mui/material/Typography';
// const products = [{
//     name: '3T Bikes',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/NVdKZ3Y/37e28531.jpg",
//     price: "100"


// },
// {
//     name: '3T Bikes',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/ykBJVV0/photo-1548360046-aedb7ed40838.jpg",
//     price: "200"


// },
// {
//     name: 'Alchemy Bicycles',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/wLC3sqG/photo-1559348349-86f1f65817fe.jpg",
//     price: "300"


// },
// {
//     name: 'All-City Cycles',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/hKxJP6K/photo-1485965120184-e220f721d03e.jpg",
//     price: "400"


// },
// {
//     name: 'Bianchi Bicycles',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/GnZr3N3/photo-1508789454646-bef72439f197.jpg",
//     price: "500"


// },
// {
//     name: 'Brompton Bikes',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/X3ffXt0/photo-1511994298241-608e28f14fde.jpg",
//     price: "600"


// },
// {
//     name: 'Cannondale Bikes',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/9HMcHcn/photo-1541625390725-39ec9fecaf17.jpg",
//     price: "700"


// },
// {
//     name: 'Canyon Bicycles',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/MshLTjV/photo-1563990308267-cd6d3cc09318.jpg",
//     price: "700"


// },
// {
//     name: 'Colnago Bikes',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/8rPKh29/photo-1577106901574-4629d3108efc.jpg",
//     price: "800"


// },
// {
//     name: 'Brompton Bikes',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/zRP3zxr/photo-1577346898588-7a1f1dd5cc79.jpg",
//     price: "900"


// },
// {
//     name: '3T Bikes',
//     description: ' A bicycle (or bike) is a small, human powered land vehicle with a seat',
//     img: "https://i.ibb.co/99Bdkxp/photo-1621576912675-f62566f2ebc5.jpg",
//     price: "1000"


// }



// ]


const AllProducts = () => {
    const [allProducts,setAllProducts] = useState([]);
    const [orderSuccess, setOrderSuccess] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
        .then(res =>res.json())
        .then(data=>setAllProducts(data))

    }, [])
    return (
        <>
        <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography className='text-primary my-3' sx={{fontWeight:"600"}} variant="h3" component="div">
                        Our best Products{allProducts.length}
                    </Typography>
                    {
                        orderSuccess && <Alert severity="success">order successfully placed</Alert>
                    }

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>


                        {
                            allProducts.map(item => <Product
                                key={item.price}
                                item={item}
                                setOrderSuccess={setOrderSuccess}></Product>)


                        }
                    </Grid>
                </Container>
            </Box>
        </>
        
        
    );
};

export default AllProducts;