import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './index.css'
import CreateLetter from './CreateLetter'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Letters from './Letters'
import PageNotFound from './PageNotFound'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path='' element={<Home />} />
    <Route path='404' element={<PageNotFound />} />
    <Route path="create" element={<CreateLetter />} />
    <Route path=":userId/letters" element={<Letters />} />
    <Route path='*' element={<PageNotFound />} />
  </Route>
))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
