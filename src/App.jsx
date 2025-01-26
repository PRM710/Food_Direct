import React from 'react'
import './App.css'
import Logo from './components/Logo'
import Intro from './components/Intro'
import Menu from './components/Menu'
import Dishes from './components/Dishes'
import Ooti from './components/Ooti'
import Thamlapork from './components/Thamlapork'
import Chicken from './components/Chicken'
import Nagastyle from './components/Nagastyle'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter ([
  { path: "/", element:<Intro/> } , 
  { path: "/dishes", element:<Dishes/> },
  { path: "/dishes/ooti", element:<Ooti/> },
  { path: "/dishes/thamlapork", element:<Thamlapork/> },
  { path: "/dishes/chicken", element:<Chicken/> },
  { path: "/dishes/nagastylepork", element:<Nagastyle/> }
])



const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
