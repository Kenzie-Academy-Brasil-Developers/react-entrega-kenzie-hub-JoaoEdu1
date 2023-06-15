import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { StyledButton } from "../../Styles/buttons";
import { StyledParagraph } from "../../Styles/typography.js";
import { StyledDiv } from "./style";
import LoginForm from "../../Components/LoginForm";

function LoginPage({ setUser }) {
  return (
    <StyledDiv>
      <img src={Logo} alt="Logo Kenzie Hub" />

      <div>
        <LoginForm setUser={setUser} />
        <StyledParagraph>Ainda não possui uma conta?</StyledParagraph>
        <StyledButton background="disable" to="/register">
          <Link to="/register">Cadastre-se</Link>
        </StyledButton>
      </div>
    </StyledDiv>
  );
}

export default LoginPage;
