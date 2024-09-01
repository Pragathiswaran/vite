import { createTheme, ThemeProvider } from "@mui/material/styles"
import { deepPurple, purple } from '@mui/material/colors';
export const dashBoardTheme = createTheme({
    components:{
        MuiAppBar:{
            styleOverrides:{
                root:{
                    padding:0,
                    margin:0,
                }
            }
        },
        MuiBox:{
            styleOverrides:{
                root:{
                    padding:0,
                    margin:0,
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform:'capitalize'
                }
            }
        }
    },
    palette:{
        primary:{
            main:'#009be5',
        },
        secondary:{
            main:deepPurple[50],
        }
    }
})