import React from 'react'
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import DrawerContent from './const/DrawerData'
import { IconButton, ListItemButton } from '@mui/material'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import Styles from '../../theme/Styles'

const DrawerNavbar = () => {

  const CustomListButton = styled(ListItemButton)({
      borderRadius:30,
      width:'100%',
      maxWidth:'200px',
      display:'flex',
      justifyContent:'flex-start',
      textAlign:'left',
      padding: '3px', // Add some padding for better readability
      paddingLeft:'10px',
      '&:hover':{
          backgroundColor:"rgba(255,255,255,0.09)",
        }
  });
  return (
    <>
      <Drawer anchor="left" variant='permanent'>
        <List sx={{marginLeft:'130px',borderRight:'1px solid rgba(255,255,255,0.3)', height:'100%'}}>
          <ListItem sx={{paddingLeft:'5px','& :hover':{backgroundColor:'rgba(255,255,255,0.3)'}}}>
            <IconButton color='inherit' sx={{marginRight:'5px'}}>
              {DrawerContent.logo}
            </IconButton>
          </ListItem>
          {DrawerContent.menu.map((i)=>(
          <ListItem key={i.id} sx={{paddingTop:'5px'}}>
            <CustomListButton>
              <ListItemIcon sx={Styles.navbarIcon}>
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.lable}
                  primaryTypographyProps={{...Styles.navbarText }}
              />
                </CustomListButton>
          </ListItem>
          ))}
          <ListItem sx={{top:'20px'}}>
            <Button variant='contained' sx={Styles.navbarPost}>
              {DrawerContent.post}
            </Button>
          </ListItem>
          <ListItem sx={{top:'50px',maxWidth:'900px'}}>
            <CustomListButton sx={{maxWidth:"100vW"}}>
              {DrawerContent.profile.logo}
              <ListItemText primary={DrawerContent.profile.name} secondary={DrawerContent.profile.Pid}
                  secondaryTypographyProps={{sx:{fontSize:'13px', color:'rgba(255,255,255,0.5)'}}}
                  sx={{display:"inline",padding:0, marginLeft:'10px',maxWidth:'120px'}}
              />
              {DrawerContent.profile.menu}
            </CustomListButton>
          </ListItem>
        </List>
        {/* <Divider orientation='vertical' flexItem sx={{alignSelf:'stretch', backgroundColor:'rgba(255,255,255,0.3)'}}/> */}
      </Drawer>
    </>
  )
}

export default DrawerNavbar