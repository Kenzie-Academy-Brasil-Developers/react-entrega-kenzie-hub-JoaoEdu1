import { useForm } from "react-hook-form";
import { StyledButton } from "../../Styles/buttons";
import { StyledForm } from "../../Styles/form";
import { StyledSelect } from "../../Styles/inputs";
import {
  StyledLabel,
  StyledParagraph,
  StyledTitleOne,
} from "../../Styles/typography";
import { api } from "../../Services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { addRegisterSchema } from "./addRegisterSchema";
import Input from "../Input";
import Select from "../Select";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(addRegisterSchema),
  });

  async function createUser(formData) {
    try {
      await api.post("/users", formData);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function submit(formData) {
    await createUser(formData);
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledTitleOne>Crie sua conta</StyledTitleOne>
      <StyledParagraph>Rápido e grátis, vamos nessa</StyledParagraph>

      <Input
        label="Nome"
        type="text"
        {...register("name")}
        error={errors?.name}
      />
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
      <Input
        label="Confirmar Senha"
        type="password"
        {...register("confirmPassword")}
        error={errors?.confirmPassword}
      />
      <Input label="Bio" type="text" {...register("bio")} error={errors?.bio} />
      <Input
        label="Contatos"
        type="text"
        {...register("contact")}
        error={errors?.contact}
      />

      <Select
        label="Selecionar módulo"
        {...register("course_module")}
        error={errors?.course_module}
      />

      <StyledButton type="submit">Cadastrar</StyledButton>
    </StyledForm>
  );
}

export default RegisterForm;
