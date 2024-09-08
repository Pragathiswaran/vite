import React from 'react'
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import DrawerContent from './const/DrawerData'
import { ListItemButton } from '@mui/material'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'



const DrawerNavbar = () => {
  return (
    <>
      <Drawer anchor="left" variant='permanent' sx={{
        width: 400,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 400,
          boxSizing: 'border-box',
          background:'red',
          color:'white',
        },
      }}>
        <List>
            {
              DrawerContent.map(({logo,menu,post,profile}) => (
                <>
                  <ListItem key={profile}>
                  <ListItemIcon>
                    {logo}
                  </ListItemIcon>
                </ListItem>
                {
                  menu.map((i)=>(
                    <ListItem key={i.id}>
                      <ListItemButton>
                      <ListItemIcon>
                        {i.icon}
                      </ListItemIcon>
                      <ListItemText primary={i.lable}/>
                      </ListItemButton>
                    </ListItem>
                  ))
                }
                <ListItem>
                  <Button>{post}</Button>
                </ListItem>
                </>
              ))
            }
        </List>
      </Drawer>
    </>
  )
}

export default DrawerNavbar