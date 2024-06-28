import {React, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';

const signUp= () =>{
    const[userName, setUserName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const Validate = (e) =>{
        e.preventDefault();

        if(userName === "" || email === "" || password === "" || confirmPassword === ""){
            alert("Please fill all the fields")
        } else {
            alert(userName + " " + email + " " + password + " " + confirmPassword)
        }
        setUserName(''); setEmail(''); setPassword(''); setConfirmPassword('')
    }
    const navigate = useNavigate();

    return(
        <>
            <div className="mt-16 grid place-content-end">
                <div className="bg-white py-10 mr-20 flex flex-col justify-center rounded-xl">
                    <div className="flex justify-end mr-5">
                        <IconButton variant='none' onClick={()=>navigate('/')}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className="ml-20 mb-3">
                        <p className='text-2xl'>Sign Up</p>
                    </div>
                    <div className='px-28'>
                    <form onSubmit={(e)=>Validate(e)} className="flex flex-col gap-2">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Username" variant="standard" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <EmailRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <KeyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Password" variant="standard" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <KeyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Confirm Password" variant="standard" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        </Box>
                    </Box>
                    <Button variant="contained" type='submit'>
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
                        <p>Already have an account? <span onClick={()=>navigate('../login')}>Log In</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signUp;