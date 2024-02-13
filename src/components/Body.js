import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Header from './Header'
import Login from './Login'



const Body = () => {
    const router = createBrowserRouter([
        {
            path : '/login',
            element : <Login/>
        },
        {
          path : '/',
          element : <Login/>
      }
    ])
  return (
    <div>
        <RouterProvider router={router}>

        </RouterProvider>
    </div>


    
  )
}

export default Body