import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Register, Profile } from "./Pages/ExpPage";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Create axios instance
  const api = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    const checkProfile = async () => {
      try {
        // Read token from cookie
        const token = Cookies.get("token");

        if (!token) {
          setIsLoggedIn(false);
          setProfile(null);
          setLoading(false);
          return;
        }

        const res = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // 👈 send token from cookie
          },
        });

        setProfile(res.data.user);
        setIsLoggedIn(true);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setIsLoggedIn(false);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    checkProfile();
  }, []);

  if (loading) {
    return <div className="loading">Checking login status...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile  profile={profile} isLoggedIn={isLoggedIn}/>: <Navigate to="/" />  }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
