import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./Store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true); // Start with loading true
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Failed to fetch current user", error);
        dispatch(logout());
      } finally {
        setLoading(false); // Ensure loading is set to false after attempt
      }
    };

    fetchUser();
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-cyan-400 h-screen w-screen">
      <div>
        <Header />
      </div>
      <div className="main">
        <Outlet/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
