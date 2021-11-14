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

const ViewAllOrder = () => {
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allProducts')
        .then(res =>res.json())
        .then(data=>setProducts(data));
    },[])
    const handleDelete = (id) => {
        const proceed = window.confirm('do you want to delete')
        if(proceed){
            const url = `http://localhost:5000/allproducts/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                         
                        const remaingProducts = products.filter(product => product._id !== id);
                        setProducts(remaingProducts);
                    }
                })
        }

       
    }
    return (
        <div>
            <h2>this is from view all Products:{products.length} </h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name:</TableCell>
                            <TableCell align="right">Email:</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">product price</TableCell>
                            
                            <TableCell align="right">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.Description}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.productPrice}</TableCell>
                                
                                <TableCell align="right"><MuiButton onClick={() => handleDelete(row._id)}>Delete</MuiButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ViewAllOrder;