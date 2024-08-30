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
import { styled } from '@mui/material';

const Authentication = () => {
  // const [value,setVlaue] = React.useState(0)
  const CustomTab = styled(Tab)(({theme})=>({
    padding:0,
    minWidth: 0,
    marginLeft:16,
    marginRight:16,
    fontWeight: 600,
    fontSize: '14px'
  }))

  return (
    <>
      <AppBar sx={{p:0}} color='primary' position='sticky' elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid container sx={{py:1}}>
              <Grid item xs={16} sx={{display:"flex", justifyContent:"flex-end"}}>
                <Button color="inherit" size='small'>Go to docs</Button>
                <IconButton color='inherit'>
                  <NotificationsIcon size="small"/>
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircleIcon size="small" />
                </IconButton>
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

    </>
  )
}

export default Authentication