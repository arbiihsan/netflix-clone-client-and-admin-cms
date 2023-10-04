import { useState, useEffect } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./stores";
import router from './routes'
import { ToastContainer } from "react-toastify"


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router}/>
    </Provider>

    // <>
    //   <Navbar></Navbar>
    //   <Sidebar></Sidebar>
    //   <LoginPage></LoginPage>
    //   <RegisterPage></RegisterPage>

    //   <Movies></Movies>
    //   <AddMovie></AddMovie>

    //   <Genres></Genres>
    //   <AddGenre></AddGenre>
    // </>
  )
}

export default App
