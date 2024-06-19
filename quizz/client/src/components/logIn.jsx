import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
const logIn = ()=>{
    return(
        <>
             <div className="mt-16 grid place-content-end">
                <div className="bg-white py-10 mr-20 flex flex-col justify-center rounded-xl">
                    <div className="flex justify-end mr-5">
                        <IconButton variant='none' disableRipple='false' onClick={()=>alert('hello')}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className="ml-20 mb-3">
                        <p className='text-2xl'>Sign Up</p>
                    </div>
                    <div className='px-28'>
                    <form onSubmit='' className="flex flex-col gap-2">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Username" variant="standard" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <KeyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Password" variant="standard" />
                        </Box>
                    </Box>
                    <Button variant="contained" disableElevation>
                        Submit
                    </Button>
                    </form>
                    <div className="text-center mt-6">
                        <p>or</p>
                    </div>
                    <div className="flex justify-center mt-6 gap-6">
                        <Button variant="contained" color='error'> <GoogleIcon /></Button>
                        <Button variant="contained" color='warning'> <GitHubIcon /></Button>
                    </div>
                    <div className="mt-6">
                        <p>Don't have an account? <a href="#">Sign In</a></p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default logIn;