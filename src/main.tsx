import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/signup'
import Dashboard from './routes/Dashboard'
import ProtectedRouter from './routes/ProtectedRouter'
import { AuthProvider } from './auth/AuthProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },

  {
    path: '/signup',
    element: <Signup />,
  },

  {
    path: '/',
    element: <ProtectedRouter />,
      children: [
        {

          path: '/dashboard',
          element: <Dashboard />,
        },
      ],
  },
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>,
);
