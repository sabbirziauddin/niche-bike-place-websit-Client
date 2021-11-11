import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import MuiButton from '../../../styledComponent/MuiButton';
import { Info } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModals = ({openPlacing,handlePlacingClose,item}) => {
     const { name, description, price} = item;

    const handleSubmit =(e)=>{
        alert('submitted form');
        //collect data from the form
        // send data to the server
        handlePlacingClose();
        e.preventDefault();
    }
  

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openPlacing}
            onClose={handlePlacingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openPlacing}>
                <Box sx={style}>
                    <Typography variant='h3' sx={{color:'Info.main'}} gutterBottom='div'> Order summary</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                        disabled
                        sx={{width:'100%',marginBottom:'15px'}}
                            
                            id="outlined-size-small"
                            defaultValue={name}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', marginBottom: '15px' }}
                            
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', marginBottom: '15px'}}
                            
                            id="outlined-size-small"
                            defaultValue={description}
                            size="small"
                        />
                        <TextField sx={{marginBottom:'15px'}} fullWidth label="Name" id="fullWidth" />
                        <TextField sx={{ marginBottom: '15px' }}fullWidth label="Email" id="fullWidth" />
                        <TextField sx={{ marginBottom: '15px' }}fullWidth label="phone" id="fullWidth" />
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <MuiButton type="submit"  sx={{ width: '200px' }} >Submit order</MuiButton>

                        </Box>
                        
                    </form>
                    
                    
                    
                    
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModals;