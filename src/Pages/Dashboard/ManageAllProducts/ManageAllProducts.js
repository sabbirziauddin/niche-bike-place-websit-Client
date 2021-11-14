import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MuiButton from '../../../styledComponent/MuiButton';
import { Alert } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const ManageAllProducts = () => {
    const [order,setOrder] = useState([]);
    useEffect(()=>{
        fetch('https://immense-oasis-52476.herokuapp.com/allorders')
        .then(res =>res.json())
        .then(data=>setOrder(data))
    },[])

const handleDeleteOrder =(id)=>{
    const proceed = window.confirm("Do you want to delete!")
    if(proceed){
        const url = `https://immense-oasis-52476.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'


        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    <Alert severity="success">account created successfully!</Alert>
                    alert('deleted successfully');
                    const remainOrder = order.filter(ord => ord._id !== id)
                    setOrder(remainOrder);

                }
            })
    }
}




    return (
        <div>
            <h2>manage all order Total:  {order.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name:</TableCell>
                            <TableCell align="right">Email:</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">product price</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.productPrice}</TableCell>
                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right"><MuiButton onClick={() => handleDeleteOrder(row._id)}>Delete</MuiButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        </div>
    );
};

export default ManageAllProducts;