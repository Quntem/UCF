import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "7.css/dist/7.scoped.css"
import App from './App.tsx'
import AboutPage from './about.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {window.location.search === "?page=about" ? <AboutPage /> : <App />}
  </StrictMode>,
)
