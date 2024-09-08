import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import App from './App.jsx'
import './index.css'
import Themes from './theme/Themes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Themes}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
