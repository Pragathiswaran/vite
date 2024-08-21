import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Authentication from "./pages/navbarPages/authentication"; 
import Database from "./pages/navbarPages/database";
import Storage from "./pages/navbarPages/storage";
import Function from "./pages/navbarPages/functions";
import Hosting from "./pages/navbarPages/hosting"; 
import MachineLearning from "./pages/navbarPages/machineLearning";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />} >
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="storage" element={<Storage />} />
        <Route path="hosting" element={<Hosting />} /> {/* Corrected component */}
        <Route path="function" element={<Function />} /> {/* Corrected component */}
        <Route path="machine-learning" element={<MachineLearning />} /> {/* Corrected component name */}
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
