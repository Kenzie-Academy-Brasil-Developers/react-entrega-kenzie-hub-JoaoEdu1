import Header from "../../Components/Header";
import {
  StyledParagraph,
  StyledTitleOne,
  StyledTitleTwo,
} from "../../Styles/typography";
import { StyledDivUser } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { MainContent } from "../../Components/MainContentHomePage";

function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <main>
        <StyledDivUser>
          <StyledTitleOne>Olá, {user?.name}</StyledTitleOne>
          <StyledParagraph fontStyle="italic">
            {user?.course_module}
          </StyledParagraph>
        </StyledDivUser>

        <MainContent />
      </main>
    </>
  );
}

export default HomePage;
