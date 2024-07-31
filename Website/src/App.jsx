import React, { useEffect } from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
