import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const user = null;
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  const allNavLinks = (
    <div className="flex flex-col md:flex-row gap-3">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "py-2 px-4 bg-highlight text-contrast rounded-md hover:bg-secondery font-medium transition duration-200"
              : "py-2 px-3 bg-primary text-contrast rounded-md hover:bg-secondery font-medium transition duration-200"
          }>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
  return (
    <div>
      <div className="navbar bg-transparent w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {allNavLinks}
            </ul>
          </div>
          <img className="md:w-2/6" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{allNavLinks}</ul>
        </div>
        <div className="navbar-end">
          {
            user?

            <div className="flex items-center gap-1">
            <img className="w-10 rounded-full border-contrast" src="" alt="" />
          <p className="text-sm">Display Name</p>
          <button className="bg-accent hover:bg-nature transition duration-200 py-2 px-3 rounded-md font-medium text-contrast">
            Logout
          </button>
          </div>
          :
          <div>
          <Link
            className="bg-accent hover:bg-nature transition duration-200 py-2 px-3 rounded-md font-medium text-contrast"
            to="/login">
            Login
          </Link>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;