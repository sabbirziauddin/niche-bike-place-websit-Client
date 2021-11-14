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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const MyOrders = () => {
    const {user} = useAuth();
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        const url =`https://immense-oasis-52476.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setOrders(data))
    },[])

    //delete 
    const handleDelete = id => {
        const proceed = window.confirm('do you want to delete')
        if (proceed) {
            const url = `https://immense-oasis-52476.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                    }
                    const remainingOrders = orders.filter(dl => dl._id !== id)
                    setOrders(remainingOrders);
                });

        }



    }
    return (
        <div>
            total order:{orders.length}
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
                        {orders.map((row) => (
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
                                <TableCell align="right"><MuiButton onClick={() => handleDelete(row._id)}>Delete</MuiButton></TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;