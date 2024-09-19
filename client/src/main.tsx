import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from './redux/Provider.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App/>
        <Toaster position="top-center" richColors/>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
)
