import { colors } from "@mui/material";
import { height, padding } from "@mui/system";

export const navbarStyles = {
    drawer: {
        width: 256,
        '& .MuiDrawer-paper': {
            marginTop: 0,
            width:256,
            backgroundColor: '#081627',
            color: 'rgba(255, 255, 255, 0.7)',
        }
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.7)', 
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize:"14px", fontWeight:600, padding:0,
        marginLeft:-2,
        
    },
    list:{
        backgroundColor:'#101F33',
        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
    },
    listItemButton:{
        padding:0,
        py:"2px",
        px:"24px",
        '&.Mui-selected':{
            color:'blue'
        }
    },

    listTop:{
        backgroundColor:'#101F33',
        color:'white',
        p:'12px 24px',
       '& .MuiListItemText-primary':{
            fontSize:'16px',
            fontWeight:'500',
       }
    },
    listItems:{
        fontSize:'22px',
        fontFamily: "Roboto",
        color: 'white',
        px:"24px",
        py:"12px",
        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.MuiListItemText-primary':{
            fontSize:'15px',
            marginRgiht:"12px",
            fontWeight:'500',
        },
        boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    },
}