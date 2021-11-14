import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../../../styledComponent/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const handleOnblur = (e) => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {
        const user = {email}
        fetch('https://immense-oasis-52476.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user),
        })
        .then (res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setEmail('');
                setSuccess(true);
            }
        })
            e.preventDefault();

    }
    return (
        <div>
            <h2> make me an admin</h2>
            <form onSubmit={handleAdminSubmit}>

                {
                    success && <Alert severity="success">Made admin successfully!</Alert>
                }
                <TextField
                    id="standard-basic"
                    sx={{ width: '75%', m: '1', px: '5' }}
                    label="Your email"
                    name="email"
                    type="email"

                    onBlur={handleOnblur}
                    variant="standard" />
                <br />
                <MuiButton sx={{marginTop:'10px'}} type="submit">Make admin</MuiButton>
            </form>
        </div>
    );
};

export default MakeAdmin;