import React from 'react'
import { Paper, Typography, Box, IconButton, TextField, styled, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ReplayIcon from '@mui/icons-material/Replay';

const SearchForm = () => {
    
  return (
    <>
        <Box sx={{display:'flex' ,justifyContent:'center', mt:10, width:"100%"}}>
            <Paper elevation={2} sx={{width:900, height:130}}>
            <Box component="div" sx={{display:"flex",justifyContent:'center',bgcolor:"whitesmoke"}}>
                <IconButton>
                    <SearchIcon color='black' fontSize='medium'/>
                </IconButton>
                <TextField 
                    margin='dense' 
                    size='small' 
                    placeholder='Search by email address, phone number or user UID'
                    variant='standard'
                    InputProps={{
                        disableUnderline:true,
                        sx:{pt:0.5, fontSize:15, width:650}
                    }}
                    sx={{mx:2 }}
                />
                <Button variant='contained' size='small' sx={{fontSize:"12px",fontWeight:'700', height:"36px", my:1, borderRadius:2}}>Add Users</Button>
                <IconButton>
                    <ReplayIcon color='black' fontSize='small' sx={{ml:3}}/>
                </IconButton>
                </Box>
                <Typography sx={{textAlign:'center',pt:3}}>
                    This is a search form
                </Typography>
            </Paper>
        </Box>
    </>
  )
}

export default SearchForm