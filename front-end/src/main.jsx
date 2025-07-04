import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ShopProvider } from './contexts/ShopContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopProvider>
      <App />
    </ShopProvider>
  </BrowserRouter>
)
