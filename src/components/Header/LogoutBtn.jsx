  import React from "react";
  import { useDispatch } from "react-redux";
  import { logout } from "../../Store/authSlice";
  import authService from "../../appwrite/auth";

  export const LogoutBtn = () => {
    const dispatch = useDispatch();

    const logoutHandler = async () => {
      try {
        await authService.logout(); // Ensure authService.logout() is asynchronous
        dispatch(logout());
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle logout failure if needed
      }
    };

    return (
      <button
        className="  px-4 py-2 border rounded-full border-white text-white  hover:bg-red-500 transition duration-200"
        onClick={logoutHandler} // Pass function reference directly
      >
        Logout
      </button>
    );
  };
