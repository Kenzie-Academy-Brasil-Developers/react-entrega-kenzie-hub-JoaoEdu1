import { StyledButton } from "../../Styles/buttons";
import Logo from "../../Assets/Logo.png";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

function Header({ maxWidth }) {
  const { userLogout } = useContext(UserContext);

  return (
    <StyledHeader maxWidth={maxWidth}>
      <div>
        <img src={Logo} alt="Logo Kenzie Hub" />
        <StyledButton background="md" size="md" onClick={userLogout}>
          Voltar
        </StyledButton>
      </div>
    </StyledHeader>
  );
}

export default Header;
