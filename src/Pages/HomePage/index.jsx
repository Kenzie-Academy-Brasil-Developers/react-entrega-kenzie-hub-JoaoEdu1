import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header";
import {
  StyledParagraph,
  StyledTitleOne,
  StyledTitleTwo,
} from "../../Styles/typography";
import { StyledDiv, StyledDivUser } from "./style";

function HomePage({ user }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://kenziehub.me/api/profile", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUserData({ data });
      } catch (error) {
        console.error("Falha na solicitação:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <Header />
      <main>
        <StyledDivUser>
          <StyledTitleOne>Olá, {user.name}</StyledTitleOne>
          <StyledParagraph fontStyle="italic">
            {user.course_module}
          </StyledParagraph>
        </StyledDivUser>
        <StyledDiv>
          <div>
            <StyledTitleOne>
              Que pena! Estamos em desenvolvimento :(
            </StyledTitleOne>
            <StyledTitleTwo fontSize="h2" color="white">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </StyledTitleTwo>
          </div>
        </StyledDiv>
      </main>
    </>
  );
}

export default HomePage;
