import { NavLink } from "react-router-dom"

const ShowlistTabs = () => {
  return (
    <nav className="drop-shadow mb-4 pt-4 flex justify-around borber-b bg-white fixed top-20 left-0 right-0 z-10">
      <NavLink
        to="upcoming"
        replace={true}
        className={({ isActive }) =>
          isActive
            ? "text-secondary font-semibold border-b-2 border-secondary flex-1 text-center"
            : "text-muted flex-1 text-center"
        }
      >
        Upcoming
      </NavLink>
      <NavLink
        to="live"
        replace={true}
        className={({ isActive }) =>
          isActive
            ? "text-secondary font-semibold border-b-2 border-secondary flex-1 text-center"
            : "text-muted flex-1 text-center"
        }
      >
        Live
      </NavLink>
      <NavLink
        to="completed"
        replace={true}
        className={({ isActive }) =>
          isActive
            ? "text-secondary font-semibold border-b-2 border-secondary flex-1 text-center"
            : "text-muted flex-1 text-center"
        }
      >
        Completed
      </NavLink>
    </nav>
  )
}

export default ShowlistTabs
