import React from 'react'
import { Paper, Typography, Box, IconButton, TextField, Button, Tooltip, Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ReplayIcon from '@mui/icons-material/Replay';

const SearchForm = () => {
    
  return (
    <>
        <Box sx={{display:'flex' ,justifyContent:'center', mt:10, width:"100%"}}>
            <Paper elevation={2} sx={{width:900, height:130}}>
            <Box component="div" sx={{bgcolor:"whitesmoke",px:2}}>
                <IconButton sx={{px:1}}>
                    <SearchIcon color='black'/>
                </IconButton>
                <TextField 
                    margin='dense' 
                    size='small' 
                    placeholder='Search by email address, phone number or user UID'
                    variant='standard'
                    InputProps={{
                        disableUnderline:true,
                        sx:{pt:0.5, fontSize:15, width:620}
                    }}
                    sx={{mx:2 }}
                />
                <Button 
                    variant='contained' 
                    size='small' 
                    sx={{fontSize:"12px",fontWeight:'700', height:"36px", my:1, borderRadius:2}}
                >
                    Add Users
                </Button>
                <IconButton sx={{px:1,ml:2}}>
                    <Tooltip title="Reload">
                        <ReplayIcon color='black'/>
                    </Tooltip>
                </IconButton>
                </Box>
                <Divider />
                <Typography sx={{textAlign:'center',pt:3}}>
                    No users for this project yet
                </Typography>
            </Paper>
        </Box>
    </>
  )
}

export default SearchForm