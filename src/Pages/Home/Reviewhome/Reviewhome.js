import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';
import './ReviewHome.css'


import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

const Reviewhome = () => {
    const [reviews,setReviews]= useState([]);
    useEffect(()=>{
        fetch('https://immense-oasis-52476.herokuapp.com/allreview')
        .then(res =>res.json())
        .then(data =>setReviews(data))
    },[])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography className='text-primary my-5' sx={{ fontWeight: "600" }} variant="h3" component="div">
                        Our Customer review {reviews.length}
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                        {
                            reviews.map(review => <Grid item xs={3} sm={4} md={4} >
                                <Card sx={{ minWidth: 275, boxShadow: 3 }}>
                                    <CardContent>



                                        <Typography sx={{ color: 'Info.main' }} variant="h5" component="div">
                                            {review.email}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            ${review.comments}
                                        </Typography>
                                        <Typography variant="body2">
                                            <Rating
                                                initialRating={review.rating}
                                                emptySymbol="far fa-star icon-color"
                                                fullSymbol="fas fa-star icon-color"
                                                readonly></Rating>
                                           
                                            <br />

                                        </Typography>
                                    </CardContent>

                                </Card>

                            </Grid>)

                        }








                    </Grid>
                </Container>
            </Box>
        </div>
        // <div>
        //     <div>
        //         <h1 className="text-primary">Total  review {review.length}</h1>
        //         {
        //             review.map(order => <div className=" d-flex justify-content-center align-items-center mt-5 ">

        //                 <div className="mb-5 col-lg-4 col-sm-6  justify-content-center align-items-center">
        //                     <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
                                
        //                         <div className="card-body">
        //                             <h3 className="card-title">Email:{order?.email}</h3>
        //                             <h5 className="card-title">Commernts:{order.comments}</h5>
        //                             <p>review count  {order?.rating} out of 5</p>
                                    

        //                         </div>
        //                         <div className="card-footer">

                                    
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>)
        //         }
        //     </div>
            
        // </div>
    );
};

export default Reviewhome;