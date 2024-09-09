import { AppBar, Box,List, ListItemButton, ListItemText, ListItem,Toolbar } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <Box
  sx={{
    padding: 0,
    margin: 0,
    flexGrow: 1,
    maxWidth: '800px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }}
>
  <Box sx={{ flexGrow: 1, maxWidth: '50%' ,marginRight:'2px'}}> {/* Adjusted layout to use flex properties */}
    <AppBar position="static" color="primary" sx={{ width: '100%' }}> {/* Set width to 100% */}
      <Toolbar>
        <List sx={{width:'100%', flexGrow:1, display:'flex'}}>
          <ListItem>
            <ListItemButton>
              <ListItemText primary='follow' primaryTypographyProps={{sx:{fontSize:20}}}/>
            </ListItemButton>
            </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary='follow' primaryTypographyProps={{sx:{fontSize:20}}}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  </Box>
  <Box sx={{ flexGrow: 1, maxWidth: '50%' }}> {/* Same layout adjustments */}
    <AppBar position="static" color="primary" sx={{ width: '100%' }}> {/* Set width to 100% */}
      <Toolbar>
        <h1>hello hello hello hello </h1>
      </Toolbar>
    </AppBar>
  </Box>
</Box>

    </>
  )
}

export default Home