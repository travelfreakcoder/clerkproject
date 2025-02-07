
// import './App.css'

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
// import Signin from "./Components/Signin"
import Header from "./layouts/Header"
import Home from "./Components/Home"
import Shop from "./Components/Shop"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
import ProductDetails from "./Components/ProductDetails"

import { Toaster } from "sonner"
import {PrivateRouter} from "./utils/PrivateRouter"
import { SignedIn, SignedOut } from "@clerk/clerk-react"
// import Root from "./Root/Root"
// import {SignIn,SignUp} from "@clerk/clerk-react"

function App() {

  const router=createBrowserRouter([{
    path:"/",
    element:<Header/>,
    children:[
      {
        index: true,
        element: (
          <SignedIn>
            <Navigate to="/home" />
          </SignedIn>
        ),
      },
      {
        path:"/signin",
        // element:<Login/>
        element: (
          <SignedOut>
            {/* <Signin /> */}
          </SignedOut>
        ),
      },
      
      {
        element: (
            <SignedIn>
              <PrivateRouter />
            </SignedIn>
          ),
        children:[
          {
            path:"/home",
            element:<Home/>
          },
          {
            path:"/shop",
            element:<Shop/>
          },
          {
            path:"/blog",
            element:<Blog/>
          },
          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/cart",
            element:<Cart/>
          },
          {
            path:"/details/:id",
            element:<ProductDetails/>
          }
        ]
      }
    ]
  }])
  

  return (
    <>
    <Toaster position="top-right" richColors/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App


