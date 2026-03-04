import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { StoreProvider } from './context/StoreContext'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cart from './components/Cart/Cart'
import Wishlist from './components/Wishlist/Wishlist'
import Checkout from './components/Checkout/Checkout'
import Payment from './components/Payment/Payment'
import OrderSuccess from './components/OrderSuccess/OrderSuccess'
import Orders from './components/Orders/Orders'


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
          {
            path: '/wishlist',
            element: <Wishlist />,
          },
          {
            path: '/checkout',
            element: <Checkout />,
          },
          {
            path: '/payment',
            element: <Payment />,
          },
          {
            path: '/OrderSuccess',
            element: <OrderSuccess />,
          },
          {
            path: '/Orders',
            element: <Orders />,
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
