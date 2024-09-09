import { height } from '@mui/system'
import React from 'react'

const Styles = {
  navbarText:{
    fontSize:20,
    fontWeight:400,
    padding:0,
    margin:0,
    width:'10px',
    maxWidth:'30px',
    whiteSpace: 'nowrap',
  },

  navbarIcon:{
    color:'white',
    padding:0,
    margin:0,
    marginLeft:'10',
  },

  navbarPost:{
    width:'200px', 
    fontSize:"14px",
    fontWeight:600, 
    borderRadius:'30px', 
    padding:'13px 20px',
    backgroundolCor: 'rgb(29, 155, 240)',
  },
  navbarButton:{
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
  }
}

export default Styles