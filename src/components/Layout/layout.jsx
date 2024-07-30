import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom"


export default function layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
