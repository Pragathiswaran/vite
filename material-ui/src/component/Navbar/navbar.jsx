import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Toolbar, Box } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from "./const/navBarLIstItems"
import HomeIcon from '@mui/icons-material/Home';
import { navbarStyles } from './style';
import { useNavigate } from 'react-router-dom'

const navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
          <List disablePadding>
            <ListItem sx={{...navbarStyles.listItems}}>
              Paperbase
            </ListItem>
            <ListItem sx={navbarStyles.listItems}>
              <ListItemIcon>
                <HomeIcon sx={navbarStyles.icon} fontSize='small'/>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ml:-1.5}}> 
                Project Overview 
              </ListItemText>
            </ListItem>
            {mainNavbarItems.map(({lable, child }) => (
              <Box key={lable} sx={{bgcolor:'#101F33'}}>
                <ListItem sx={navbarStyles.listTop} disablePadding>
                  <ListItemText>{lable}</ListItemText>
                </ListItem>
                {child.map(({lable,id,icon,routes,select})=>(
                  <ListItem key={id} sx={navbarStyles.list} disablePadding>
                  <ListItemButton onClick={navigate(()=>routes)} sx={navbarStyles.listItemButton} selected={select} disablePadding>
                    <ListItemIcon sx={navbarStyles.icon}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{...navbarStyles.text}} primary={lable} />
                  </ListItemButton>
                </ListItem>
                ))}
                <Divider sx={{mt:2}}/>
              </Box>
            ))}
          </List>
      </Drawer>
    </>
  )
}

export default navbar