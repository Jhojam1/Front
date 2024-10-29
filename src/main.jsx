import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from "./components/Login.jsx";
import GradientBackground from "./components/GradientBackground.jsx";
import Login2 from "./components/Login2.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
