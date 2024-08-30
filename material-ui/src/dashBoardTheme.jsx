import { createTheme } from "@mui/material/styles"
import { deepPurple, purple } from '@mui/material/colors';
export const dashBoardTheme = createTheme({
    components:{
        palette:{
            secondary:{
                main:deepPurple[50],
            }
        }
    }
})