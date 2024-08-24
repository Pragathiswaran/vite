import { createTheme } from "@mui/material/styles"
export const dashBoardTheme = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize: '2rem'
                }
            }
        },
        MuiDivider:{
            styleOverrides:{
                root:{
                    backgroundColor: 'gray'
                }
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                }
            }
        }
    }
})