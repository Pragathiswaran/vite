import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Authentication from "./pages/navbarPages/authentication"; 
import Database from "./pages/navbarPages/database";
import Storage from "./pages/navbarPages/storage";
import Function from "./pages/navbarPages/functions";
import Hosting from "./pages/navbarPages/hosting"; 
import MachineLearning from "./pages/navbarPages/machineLearning";
import { ThemeProvider } from '@mui/material/styles';
import App from './App.jsx'
import './index.css'
import { dashBoardTheme } from './dashBoardTheme';


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={dashBoardTheme}>
    <StrictMode>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="authentication" element={<Authentication />} />
            <Route path="database" element={<Database />} />
            <Route path="storage" element={<Storage />} />
            <Route path="hosting" element={<Hosting />} /> 
            <Route path="function" element={<Function />} /> 
            <Route path="machine-learning" element={<MachineLearning />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
)
