import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div className="pt-20 pb-14 min-h-screen">
      <Navbar />
      <main className="bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
