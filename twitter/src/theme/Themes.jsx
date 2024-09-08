import { createTheme } from '@mui/material/styles'

const Themes = createTheme({
    components:{
        MuiList:{
            styleOverrides:{
                root:{
                    paddingLeft:'130px'
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
                    // padding:0,
                    margin:0,
                    borderRadius:30,
                    fontSize:20,
                    '& .MuiListItemButton-root':{
                        padding:10,
                        margin:10,
                    }
                }
            }
        },
        MuiListItemIcon:{
            styleOverrides:{
                root:{
                    color:'white',
                    fontSize:30,
                    padding:0,
                }
            }
        },
        MuiListItemText:{
            styleOverrides:{
                root:{
                    color:'white',
                    fontSize:60,
                    padding:0,
                }
            }
        },
    }
})

export default Themes