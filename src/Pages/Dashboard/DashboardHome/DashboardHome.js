import * as React from 'react';
import { Grid } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';


const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MyOrders></MyOrders> 
                
            </Grid>
        </Grid> 
    );
};

export default DashboardHome;