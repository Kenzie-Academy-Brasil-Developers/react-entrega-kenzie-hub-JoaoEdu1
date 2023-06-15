import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import { useState } from "react";

function RoutesMain() {
  const [user, setUser] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage user={user} />} />
    </Routes>
  );
}

export default RoutesMain;
