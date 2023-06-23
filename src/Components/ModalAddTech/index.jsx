import { useForm } from "react-hook-form";
import {
  StyledModalForm,
  StyledModalHeader,
  StyledModalTech,
} from "../../Styles/Modal";
import { StyledButton } from "../../Styles/buttons";
import { StyledSelect } from "../../Styles/inputs";
import { StyledLabel, StyledTitleOne } from "../../Styles/typography";
import Input from "../Input";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";

export function ModalAddTech({ setIsOpen }) {
  const { register, handleSubmit } = useForm();

  const { user } = useContext(UserContext);
  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
    setIsOpen(false);
  };

  return (
    <StyledModalTech>
      <div>
        <StyledModalHeader>
          <StyledTitleOne>Cadastrar Tecnologia</StyledTitleOne>
          <StyledButton
            background="modal"
            size="small"
            onClick={() => setIsOpen(false)}
          >
            X
          </StyledButton>
        </StyledModalHeader>
        <StyledModalForm onSubmit={handleSubmit(submit)}>
          <Input label="Nome" type="text" {...register("title")} />
          <StyledLabel color="label" fontStyle="normal" className="marginTop">
            Selecionar status
          </StyledLabel>
          <StyledSelect {...register("status")}>
            <option value="">Selecione a opção</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
          <StyledButton type="submit">Cadastrar Tecnologia</StyledButton>
        </StyledModalForm>
      </div>
    </StyledModalTech>
  );
}
