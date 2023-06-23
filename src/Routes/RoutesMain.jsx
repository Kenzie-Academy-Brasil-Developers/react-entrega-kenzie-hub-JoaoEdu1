import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import { useState } from "react";
import ProtectedRoutes from "./ProtectedRoute";
import PublicRoutes from "./PublicRoutes";
import { TechProvider } from "../providers/TechContext";

function RoutesMain() {
  const [user, setUser] = useState([]);
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <TechProvider>
              <HomePage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
