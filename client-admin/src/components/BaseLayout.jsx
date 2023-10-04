import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { ToastContainer } from "react-toastify"

const BaseLayout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default BaseLayout