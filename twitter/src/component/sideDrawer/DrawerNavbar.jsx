import React from 'react'
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import DrawerContent from './const/DrawerData'
import { Box, Icon, IconButton, ListItemButton } from '@mui/material'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import Styles from '../../theme/Styles'



const DrawerNavbar = () => {
  return (
    <>
      <Drawer anchor="left" variant='permanent'sx={{}}>
        <List sx={{marginLeft:'130px',borderRight:'1px solid rgba(255,255,255,0.3)', height:'100%'}}>
          <ListItem sx={{paddingLeft:'5px'}}>
            <IconButton color='inherit' sx={{marginRight:'5px'}}>
              {DrawerContent.logo}
            </IconButton>
          </ListItem>
          {DrawerContent.menu.map((i)=>(
          <ListItem key={i.id} sx={{paddingTop:'5px'}}>
            <ListItemButton sx={{...DrawerContent.navbarButton}}>
              <ListItemIcon sx={Styles.navbarIcon}>
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.lable}
                  primaryTypographyProps={{...Styles.navbarText }}
              />
                </ListItemButton>
          </ListItem>
          ))}
          <ListItem sx={{top:'20px'}}>
            <Button variant='contained' sx={{...Styles.navbarPost}}>
              {DrawerContent.post}
            </Button>
          </ListItem>
          <ListItem sx={{top:'50px',maxWidth:'900px'}}>
            <ListItemButton sx={{maxWidth:"260px",display:'flex',flexDirection:'row',...DrawerContent.navbarButton}}>
              {DrawerContent.profile.logo}
              <ListItemText primary={DrawerContent.profile.name} secondary={DrawerContent.profile.Pid}
                  secondaryTypographyProps={{sx:{fontSize:'13px', color:'rgba(255,255,255,0.5)'}}}
                  sx={{display:"inline",padding:0, marginLeft:'10px',maxWidth:'120px'}}
              />
              {DrawerContent.profile.menu}
            </ListItemButton>
          </ListItem>
        </List>
        <Divider orientation='vertical' flexItem sx={{alignSelf:'stretch', backgroundColor:'rgba(255,255,255,0.3)'}}/>
      </Drawer>
    </>
  )
}

export default DrawerNavbar