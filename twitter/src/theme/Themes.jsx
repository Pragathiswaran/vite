import { createTheme } from '@mui/material/styles'

const Themes = createTheme({
    components:{
        MuiList:{
            styleOverrides:{
                root:{
                    paddingRight:'40px'
                }
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    padding:0,
                }
            }
        },
       MuiListItemButton:{
            styleOverrides:{
                root:{
                   
                }
            }
        },
        MuiDrawer:{
            styleOverrides:{
                root:{
                    width:400,
                    flexShrink:0,
                    border:'none',
                },
                paper:{
                    width:400,
                    boxSizing:'border-box',
                    background:'transparent',
                    color:'white',
                }
            }
        }
    }
})

export default Themes