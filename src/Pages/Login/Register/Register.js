import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container, TextField, Typography, CircularProgress } from '@mui/material';
import MuiButton from '../../../styledComponent/MuiButton';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Password } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';

const Register = () => {


    const [loginData, setLoginData,] = useState({});
    // const [email, setEmail] = useState('');
    // const [pass,setPass] = useState('');
    const { registerUser, signInWithGoogle, setUser, isLoading, authError, user} = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location?.state?.from ||"/";
    
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field,value);
        
       
        
    }
    const handleLoginSubmit = (e) => {
        
        if (loginData.password !== loginData.password2){
            alert('password didnt match');
            return;
        }
        registerUser(loginData.email,loginData.password);

        e.preventDefault();
    }

    

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((res) => {
                setUser(res.user);
                history.replace(url);
                

            }

            )
            .catch((err) => console.dir(err));
    };
    // const handleSignInWithGoogle=()=>{
    //     signInWithGoogle(location,history);
    // }
    return (
        <div>
            
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={12}>
                        {
                            user?.email && <Alert severity="success">account created successfully!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        <Typography variant="h4" gutterBottom >Register </Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit} >
                            <TextField 
                                id="standard-basic"
                                sx={{ width: '75%', m: '1', px: '5' }}
                                label="Your email"
                                name="email"
                                type="email"
                                
                                onChange={handleOnChange}
                                variant="standard" />
                            <br />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: '1' }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                autoComplete="current-password"
                                variant="standard"
                            />

                            <TextField
                                sx={{ width: '75%', margin: '30px' }}
                                id="standard-basic"
                                label="Retype Password"
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                                variant="standard"
                            />
                            <br />
                            <br />
                            <Link to='/login'>
                                <Button variant="text"> Already register?please Register</Button>

                            </Link>
                            <br />
                           

                            <MuiButton sx={{ width: '25%' }} type="submit"> login</MuiButton>
                            <MuiButton onClick={handleSignInWithGoogle}> Google sign IN</MuiButton>
                            

                            


                        </form>}
                        {
                            isLoading && <CircularProgress color="success" />
                        }
                        

                    </Grid>


                </Grid>
            </Container>
        </div>
    );
};

export default Register;