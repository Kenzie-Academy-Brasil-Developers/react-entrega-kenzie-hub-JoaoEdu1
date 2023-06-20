import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/api";
import { StyledForm } from "../../Styles/form";
import { StyledTitleOne } from "../../Styles/typography";
import { StyledButton } from "../../Styles/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { addLoginSchema } from "./addLoginSchema";
import Input from "../Input";

function LoginForm({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(addLoginSchema),
  });

  const navigate = useNavigate();

  async function createUser(formData) {
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

  async function submit(formData) {
    await createUser(formData);
    reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledTitleOne>Login</StyledTitleOne>

      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors?.email}
      />

      <Input
        label="Senha"
        type="password"
        {...register("password")}
        error={errors?.password}
      />

      <StyledButton>Entrar</StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
