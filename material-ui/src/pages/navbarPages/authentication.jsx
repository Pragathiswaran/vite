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
import Box from '@mui/material/Box';

const Authentication = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar sx={{width:"83.2%", margin:" 0 auto", bgcolor:"#009be5"}} variant='outlined'>
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
        <Toolbar>
        <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Authentication