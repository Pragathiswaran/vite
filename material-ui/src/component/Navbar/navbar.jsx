import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from "./const/navBarLIstItems"
import { navbarStyles } from './style';
import { useNavigate } from 'react-router-dom'

const navbar = () => {
  const navigate = useNavigate()
  return (
    <Drawer
    sx={navbarStyles.drawer}
    variant="permanent"
    anchor="left"
   
    >
    <Toolbar />
    <List >
      {mainNavbarItems.map((items, index) => (
        <ListItem   
          key={items.id}
          onClick={() => navigate(items.routes)} 
          sx={navbarStyles.list} disablePadding>
            <ListItemButton disablePadding>
              <ListItemIcon 
              sx={navbarStyles.icon} disablePadding>
                  {items.icon}
                </ListItemIcon>
                <ListItemText primary={items.lable} sx={navbarStyles.text} disablePadding/>
            </ListItemButton>
        </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default navbar