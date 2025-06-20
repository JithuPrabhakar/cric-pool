import { Outlet } from "react-router-dom"

const LoginLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white">
      <Outlet />
    </div>
  )
}

export default LoginLayout
