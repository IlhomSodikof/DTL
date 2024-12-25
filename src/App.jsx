import React from 'react'

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Home from "./Page/Home"
import Layout from "./Layout/Layout"
import Contact from "./Page/Contact"
import Team from './Page/Team'
import ErrorPage from './components/ErrorPage'
import News from './Page/News'
import Dictonary from './Page/Dictonary'
import Projects from './Page/Projects'
import Hero from './components/Home/Hero'


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <  Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/dictonary",
          element: <Dictonary />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/websites",
          element: <Hero />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ]
    },

  ])
  return <RouterProvider router={routes} />
}