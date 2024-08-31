import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack, CssBaseline } from '@mui/material';
import SearchForm from '../../component/form/searchForm';

const Authentication = () => {
  // const [value,setVlaue] = React.useState(0)
  const CustomTab = styled(Tab)(({theme})=>({
    padding:0,
    minWidth: 0,
    marginLeft:12,
    marginRight:12,
    fontWeight: 600,
    fontSize: '14px'
  }))

  return (
    <>
    <CssBaseline />
    <Box sx={{ width: '100%'}}>
    <AppBar position="static" sx={{width:'100%',p:0, m:0}} color='primary' elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid container sx={{py:1}}>
              <Grid item xs={16} sx={{display:"flex", justifyContent:"flex-end"}}>
                <Stack direction='row'>
                  <Button color="inherit" size='small'>Go to docs</Button>
                  <IconButton color='inherit'>
                    <NotificationsIcon size="small"/>
                  </IconButton>
                  <Avatar alt="Remy Sharp" sizes='small' src="/static/images/avatar/1.jpg" />
                </Stack>
              </Grid>
            </Grid>
            <Grid container sx={{py:1}}>
              <Grid item xs={8}>
                <Typography variant="h5" component="div" sx={{fontWeight:500}}>Authentication</Typography>
              </Grid>
              <Grid Grid item xs={4} sx={{display:"flex", justifyContent:"flex-end"}}>
                <Button color='inherit' variant='outlined' size='small'>Web setup</Button>  
              </Grid> 
            </Grid>    
          </Grid> 
        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{width:'100%'}} elevation={0}>
        <Tabs value={0} 
          textColor="inherit" 
          TabIndicatorProps={{sx:{backgroundColor:'white',height:'4px',borderRadius:'5px', borderBottom:"0px"}}}
        >
          <CustomTab label="Users" />
          <CustomTab label="Sign-in method" />
          <CustomTab label="Template" />
          <CustomTab label="Usage" />
        </Tabs>
      </AppBar>
    </Box>
    <SearchForm />
    </>
  )
}

export default Authentication