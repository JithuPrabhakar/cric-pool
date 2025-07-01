import { NavLink } from "react-router-dom"
import { IoPersonCircle } from "react-icons/io5"
import { IoNotificationsSharp } from "react-icons/io5"
import background from "../assets/background.png"
import logo from "../assets/app-logo.jpg"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [userImage, setUserImage] = useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const { image } = JSON.parse(storedUser)
      setUserImage(image)
    }
  }, [])

  return (
    <header
      className="fixed top-0 left-0 w-full text-white p-4 z-10 flex items-center justify-between"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex gap-8 items-center">
        <div className="mx-auto w-12 h-12">
          <img
            src={logo}
            alt="App Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-bold">MY ROYAL TEAM</p>
      </div>
      <div className="flex gap-4 items-center">
        <NavLink to="/notification">
          <IoNotificationsSharp className="text-xl" />
        </NavLink>
        <NavLink to="/profile">
          {userImage ? (
            <img
              src={userImage || logo}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <IoPersonCircle className="text-3xl" />
          )}
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
