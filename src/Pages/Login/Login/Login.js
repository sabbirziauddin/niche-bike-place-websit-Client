import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import login1 from '../../../images/log3.jpeg'
import logImg from '../../../images/log4.jpeg'
import MuiButton from '../../../styledComponent/MuiButton';
import { Link } from 'react-router-dom';



const Login = () => {
    const [loginData,setLoginData] =useState({})
    const style ={
        
        minHeight:'600',
        height:'100vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        background: `url(${login1})`,
        


    }
    const handleOnChange =(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);
        console.log(field,value);
    }
    const handleLoginSubmit =(e)=>{
        
        alert('submit');
        e.preventDefault();
    }
    return (
        <div >
            <Container>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" gutterBottom >Login</Typography>
                        <form onSubmit={handleLoginSubmit} >
                            <TextField id="standard-basic"
                                sx={{ width: '75%', m: '1', px: '5' }}
                                label="Your email"
                                type="email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard" />
                             <br />
                             <br />
                            <TextField
                                sx={{ width: '75%', m: '1' }}
                                id="outlined-password-input"
                                label="Your Password"
                                type="password"
                                name= "password"
                                onBlur={handleOnChange}
                                autoComplete="current-password"
                            />
                            <br />
                            <br />
                            <Link to ='/register'>
                                <Button variant="text"> New user? please register</Button>
                            
                            </Link>
                            <br />

                            <MuiButton sx={{ width:'25%'}} type="submit"> login</MuiButton>


                        </form>

                    </Grid>
                    

                </Grid>
            </Container>
        </div>
    );
};

export default Login;