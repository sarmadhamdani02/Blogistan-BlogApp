import React from "react";
import { useDispatch } from "react-redux";
import authSlice, { logout } from "../../Store/authSlice";
import authService from "../../appwrite/config";

export  const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200">
      Logout
    </button>
  );
};
