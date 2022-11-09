import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Container from "../../../../shared/Container/Container";
import logo from "../../../../assets/image/logo.png";
import { AuthContext } from "../../../../context/auth/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const logoutHandler = () => {
    logOut();
  };

  let activeStyle = {
    color: "#22c55e",
  };
  return (
    <div className="bg-white   h-24  text-gray-900  border-b-2  shadow-sm">
      <Container>
        <div className=" flex justify-between items-center h-full">
          <div className="flex items-center text-gray-900">
            <img
              src={logo}
              alt="Consult & Grow logo"
              className="h-10 w-10 mr-3"
            />
            <Link to="/" className="font-extrabold md:text-3xl text-xl  ">
              Consult <span className="text-[#1cc65e]">&</span> Grow
            </Link>
          </div>

          <div className="lg:hidden">
            {open && (
              <XMarkIcon
                className="h-8 w-8 hover:text-green-500 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
            {!open && (
              <Bars3Icon
                onClick={() => setOpen(!open)}
                className="h-8 w-8 hover:text-green-500 cursor-pointer "
              />
            )}
          </div>
          <nav className="flex items-center">
            <ul className=" hidden lg:flex mr-10">
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="ml-6 text-lg  font-medium  hover:text-green-500 transition-all duration-300 ease-in-out"
                  to={"/services"}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out"
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out"
                      to={"/userreviews"}
                    >
                      My Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out"
                      to={"/addservice"}
                    >
                      Add service
                    </NavLink>
                  </li>
                  <li>
                    <Link
                      className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out">
                  <Link to={"/login"}>login</Link>
                </li>
              )}
            </ul>
          </nav>
          {/* Mobile nav menu */}
          <nav
            className={`md:hidden absolute bg-white dark:bg-slate-900 w-full pb-5 left-0 text-center transition-all  duration-500 ease-in-out ${
              open ? "top-24" : "top-[-320px]"
            }`}
          >
            <ul>
              <li className="my-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="my-6 text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                  to={"/services"}
                >
                  Services
                </NavLink>
              </li>

              <li className="my-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out"
                      to={"/userreviews"}
                    >
                      My Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out"
                      to={"/addservice"}
                    >
                      Add service
                    </NavLink>
                  </li>
                  <li>
                    <Link
                      className="ml-6 text-lg font-medium   hover:text-green-500 transition-all duration-300 ease-in-out"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li className=" text-xl font-medium   hover:text-green-500 transition-all duration-300 ease-in-out">
                  <Link to={"/login"}>login</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
