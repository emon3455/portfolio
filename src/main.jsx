import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.jsx'
import Particle from './particles/Particle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Particle></Particle>
    <RouterProvider router={router} />
    </>
  </React.StrictMode>,
)
