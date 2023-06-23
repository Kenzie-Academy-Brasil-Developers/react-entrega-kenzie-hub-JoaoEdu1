import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [techList, setTechList] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const loadNewTech = () => {
      setTechList(user.techs);
    };
    loadNewTech();
  }, []);

  const createTech = async (formData) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList((techList) => [...techList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const editTech = async (formData, TechNewId) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const { data } = await api.put(`/users/techs/${TechNewId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList((techList) =>
        techList.map((tech) => {
          if (tech.id === TechNewId) {
            return data;
          } else {
            return tech;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deletTech = async (TechNewId) => {
    const token = localStorage.getItem("@TOKEN");
    console.log(TechNewId);
    try {
      await api.delete(`/users/techs/${TechNewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList((techList) =>
        techList.filter((TechId) => TechId.id !== TechNewId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ techList, createTech, deletTech, editTech }}>
      {children}
    </TechContext.Provider>
  );
}
