import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { BiSolidUserCircle } from "react-icons/bi";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  let navLinks = [
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
      name: "About",
      path: "/about",
    },
  ];
  if (user) {
    navLinks = [
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
        name: "Contact",
        path: "/contact",
      },
      {
        name: "About",
        path: "/about",
      },
    ];
  }

  const allNavLinks = (
    <div data-aos="fade-down" className="flex flex-col md:flex-row gap-3">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "py-2 px-4 bg-highlight text-contrast rounded-md hover:bg-secondery hover:text-white font-medium transition duration-200"
              : "py-2 px-3 bg-primary text-contrast rounded-md hover:bg-secondery hover:text-white font-medium transition duration-200"
          }>
          {link.name}
        </NavLink>
      ))}
    </div>
  );

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  return (
    <div>
      <div className="navbar bg-transparent md:w-11/12 mx-auto">
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
          {user ? (
            <div>
              <div className="hidden md:flex items-center gap-1">
                {user?.photoURL ? (
                  <img
                    className="w-10 rounded-full border-contrast"
                    src={`${user?.photoURL}`}
                    alt=""
                  />
                ) : (
                  <BiSolidUserCircle className="text-4xl text-secondery"></BiSolidUserCircle>
                )}
                <p className="text-sm">{user?.displayName || user?.email}</p>
                <button
                  onClick={handleLogOut}
                  className="bg-accent hover:bg-nature transition duration-200 py-2 px-3 rounded-md font-medium text-contrast">
                  Logout
                </button>
              </div>
              <div className="flex md:hidden">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img className="w-10 rounded-full border-contrast"
                    src={`${user?.photoURL}`}
                    alt="" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li><p className="text-sm">{user?.displayName || user?.email}</p></li>
                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link
                className="bg-accent hover:bg-nature transition duration-200 py-2 px-3 rounded-md font-medium text-contrast"
                to="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
