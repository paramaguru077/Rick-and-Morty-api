import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Api-project/Main'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App/>
    
  </StrictMode>,
)
