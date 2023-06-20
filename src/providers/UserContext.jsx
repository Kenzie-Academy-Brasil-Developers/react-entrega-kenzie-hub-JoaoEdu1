import { Children, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  console.log(user);

  const navigate = useNavigate();

  async function userRegister(formData) {
    try {
      await api.post("/users", formData);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function userLogin(formData) {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);

      setUser(data.user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  function userLogout() {
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}
