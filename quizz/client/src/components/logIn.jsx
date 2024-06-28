import {React, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';

const logIn = ()=>{
    
    const [userNameLog,setUsernameLog] = useState("")
    const [passwordLog,setPasswordLog] = useState("")
    const navigate = useNavigate();

    const logInHnadler = (e) =>{
        // e.preventDefault()
        if(userNameLog === "" || passwordLog === ""){
            alert("Please fill all the fields")
            // setUsernameLog(""); setPasswordLog("")
        } else {
            alert(userNameLog + " " + passwordLog)
            // setUsernameLog(""); setPasswordLog("")
        }
    }

    return(
        <>
             <div className="mt-16 grid place-content-end">
                <div className="bg-white py-10 mr-20 flex flex-col justify-center rounded-xl">
                    <div className="flex justify-end mr-5">
                        <IconButton variant='none' disableRipple={false} onClick={()=>navigate('/')}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className="ml-20 mb-3">
                        <p className='text-2xl'>LogIn</p>
                    </div>
                    <div className='px-28'>
                    <form className="flex flex-col gap-2" onSubmit={logInHnadler}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Username" variant="standard" 
                                value={userNameLog}
                                onChange={(e)=>setUsernameLog(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <KeyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Password" variant="standard" 
                                value={passwordLog}
                                onChange={(e)=>setPasswordLog(e.target.value)}
                            />
                        </Box>
                    </Box>
                    <Button variant="contained" disableElevation type='submit'>
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
                        <p>Don't have an account? <span onClick={()=>navigate('../signup')}>Sign In</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default logIn;