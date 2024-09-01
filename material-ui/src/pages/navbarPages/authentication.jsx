import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack, CssBaseline, Tooltip} from '@mui/material';
import SearchForm from '../../component/form/searchForm';

const Authentication = () => {
  const CustomTab = styled(Tab)(({theme})=>({
    padding:0,
    minWidth: 0,
    marginLeft:12,
    marginRight:12,
    fontWeight: 500,
    fontSize: '0.875rem',
    textTransform:'capitalize'
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
                  <Tooltip title='Alter . no alert'>
                    <IconButton color='inherit' sx={{px:1}}>
                      <NotificationsIcon size="small"/>
                    </IconButton>
                  </Tooltip>
                  <Avatar alt="Remy Sharp" sx={{width:28, height:28, mt:"6px",mx:1}}/>
                </Stack>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h5" component="div" sx={{fontWeight:500}}>Authentication</Typography>
              </Grid>
              <Grid Grid item xs={4} sx={{display:"flex", justifyContent:"flex-end"}}>
                <Button 
                  color='inherit' 
                  variant='outlined' 
                  size='small'
                  sx={{fontSize:"12px",fontWeight:'700', height:"30px", borderRadius:2}}
                >Web setup
                </Button>
                <Tooltip title="Help">
                  <IconButton color='inherit'>
                    <HelpIcon size="small"/>
                  </IconButton>  
                </Tooltip>
              </Grid> 
            </Grid>    
          </Grid> 
        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{width:'100%'}} elevation={0}>
        <Box sx={{ml:1}}>
          <Tabs value={0} 
            textColor="inherit" 
            TabIndicatorProps={{sx:{backgroundColor:'white',height:'4px',borderRadius:'5px', borderBottom:"0px"}}}
          >
            <CustomTab label="Users" />
            <CustomTab label="Sign-in method" />
            <CustomTab label="Template" />
            <CustomTab label="Usage" />
          </Tabs>
        </Box>
      </AppBar>
    </Box>
    <SearchForm />
    </>
  )
}

export default Authentication