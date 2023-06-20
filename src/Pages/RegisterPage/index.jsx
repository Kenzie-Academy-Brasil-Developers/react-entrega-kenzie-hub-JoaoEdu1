import { StyledMain } from "./style";
import Header from "../../Components/Header";
import RegisterForm from "../../Components/RegisterForm";

function RegisterPage() {
  return (
    <>
      <Header maxWidth="small" />
      <StyledMain>
        <div>
          <RegisterForm />
        </div>
      </StyledMain>
    </>
  );
}

export default RegisterPage;
