import React from 'react';
import DrawerNavbar from './component/sideDrawer/DrawerNavbar';
import Grid  from '@mui/material/Grid2';
import Home from './page/home';

const App = () => {
  return (
    <>      
      <Grid container columns={12} spacing={0}>
        <Grid item xs={4}>
          <DrawerNavbar />
        </Grid>
        <Grid item xs={8}>
            {/* <Home /> */}
        </Grid>
      </Grid>
      
    </>
  );
};

export default App;
