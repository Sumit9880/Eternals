import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Screens/Home/Home.jsx'
import NotFound from './Components/NotFound.jsx'
import About from './Screens/About/About.jsx'
import ContactUs from './Screens/ContactUs/ContactUs.jsx'
import TakeService from './Screens/TakeService/TakeService.jsx'
import WebApplicationDevelopment from './Screens/WebApplicationDevelopment/WebApplicationDevelopment.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/take-service" element={<TakeService />} />
      <Route path="/webdevelopment" element={<WebApplicationDevelopment />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
