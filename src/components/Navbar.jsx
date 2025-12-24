import { NavLink } from "react-router-dom"

const Navbar = () => {

  const linkColor = ({isActive}) =>
    isActive ? "bg-black text-white hover-bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-black hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md"

  return (
    <div className="bg-blue-300 ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink className="text-lg md:text-2xl font-semibold tracking-wide" to="/">
          React-Challenge
        </NavLink>
        <div>
          <ul className="flex gap-1 md:gap-6">
            <NavLink className={linkColor} to="/">
              Home
            </NavLink>
            <NavLink className={linkColor} to="/jobs">
              Jobs
            </NavLink>
            <NavLink className={linkColor} to="/add-job">
              Add Job
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
