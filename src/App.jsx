import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { StoreProvider } from './context/StoreContext'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cart from './components/Cart/Cart'


const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:
        [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/cart',
            element: <Cart />,
          },
          
        ]
    }
  ])
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  )
}

export default App
