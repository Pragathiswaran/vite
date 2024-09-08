import React from 'react';
import DrawerNavbar from './component/sideDrawer/DrawerNavbar';
import Grid  from '@mui/material/Grid2';
const App = () => {
  return (
    <>      
      <Grid container columns={18} spacing={1}>
        <Grid item xs={6}>
          <DrawerNavbar />
        </Grid>
        <Grid item xs={6}>
          <h1>Twitter</h1>
        </Grid>
        <Grid item xs={6}>
            <h1>content</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
