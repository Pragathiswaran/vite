import { height, padding } from "@mui/system";

export const navbarStyles = {
    drawer: {
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 260,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
        }
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.7)',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            fontWeight: '500',
            fontSize: '14px',
        }
    },
    list:{
        marginTop:"-10px",
        padding:'-40px',
        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }
    },
    buttonHover:{
        '.Mui-focusVisible':{
            margin:'2px'
        },
        
    }
}