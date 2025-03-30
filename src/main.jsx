import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { enrutador } from './router/enrutador.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./index.css"
import "./responsive.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(enrutador)}/>
  </StrictMode>,
)
