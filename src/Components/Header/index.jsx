import { StyledButton } from "../../Styles/buttons";
import Logo from "../../Assets/Logo.png";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";

function Header({ maxWidth }) {
  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <StyledHeader maxWidth={maxWidth}>
      <div>
        <img src={Logo} alt="Logo Kenzie Hub" />
        <StyledButton
          background="md"
          size="md"
          onClick={handleClearLocalStorage}
        >
          <Link to="/">Voltar</Link>
        </StyledButton>
      </div>
    </StyledHeader>
  );
}

export default Header;
