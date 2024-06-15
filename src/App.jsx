import { useEffect, useState, useSyncExternalStore } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./Store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally((loading) => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" bg-cyan-400 h-screen w-screen ">
      <div>
        <Header />
      </div>
      <div className="main">{/* Outlet */}Main contents</div>
      <div>
        <Footer />
      </div>
    </div>
  ) : (
    <h1>Something went wring :(</h1>
  );
}

export default App;
