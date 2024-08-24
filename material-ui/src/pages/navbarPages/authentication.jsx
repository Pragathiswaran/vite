import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../component/common/commonButton/commonButton';

const Authentication = () => {
  return (
    <Grid item xs={8}>
      Authentication
      <CommonButton color="primary" size="large">Primary</CommonButton>
    </Grid>
    
  )
}

export default Authentication