import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, LogoutBtn, Logo } from "../index";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <div className=" py-3 shadow bg-gray-500">
      <nav className="flex">
        <div className="mr-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul>
          {navItems.map((items) => {
            items.active ? (
              <button
                class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-200"
                navigate={items.slug}
              >
                items.name
              </button>
            ) : null;

            {
              authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
