import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const loadUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token && id) {
      loadUser();
    }
  }, []);

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
    <UserContext.Provider
      value={{ user, userRegister, userLogin, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}
