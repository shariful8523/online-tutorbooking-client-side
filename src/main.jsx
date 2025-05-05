import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './routers/router'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Providers/AuthProviders'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
