import { Outlet } from "react-router-dom"
import ShowlistTabs from "../../components/ShowlistTabs"

const MyMatches = () => {
  return (
    <div className="mt-12">
      <ShowlistTabs />
      <Outlet />
    </div>
  )
}

export default MyMatches
