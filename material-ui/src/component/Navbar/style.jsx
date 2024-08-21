export const navbarStyles = {
    drawer: {
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.7)',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            fontWeight: '600',
            fontSize: '16px',
            margin:"5px",
        }
    },
    list:{
        marginTop:"-15px"
    }
}