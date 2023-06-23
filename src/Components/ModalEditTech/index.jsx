import { useContext, useState } from "react";
import {
  StyledModalForm,
  StyledModalHeader,
  StyledModalTech,
} from "../../Styles/Modal";
import { StyledButton } from "../../Styles/buttons";
import { StyledSelect } from "../../Styles/inputs";
import { StyledLabel, StyledTitleOne } from "../../Styles/typography";
import Input from "../Input";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";

export function ModalEditTech({ setIsOpen, id, title }) {
  const { register, handleSubmit } = useForm();
  const { deletTech, editTech } = useContext(TechContext);

  const editTechList = async (formData) => {
    await editTech(formData, id);
    setIsOpen(false);
  };

  return (
    <StyledModalTech>
      <div>
        <StyledModalHeader>
          <StyledTitleOne>Tecnologia Detalhes</StyledTitleOne>
          <StyledButton
            background="modal"
            size="small"
            onClick={() => setIsOpen(false)}
          >
            X
          </StyledButton>
        </StyledModalHeader>
        <StyledModalForm noValidate onSubmit={handleSubmit(editTechList)}>
          <StyledLabel color="label" fontStyle="normal">
            Nome
          </StyledLabel>

          <p> {title} </p>

          <StyledLabel color="label" fontStyle="normal" className="marginTop">
            Status
          </StyledLabel>
          <StyledSelect {...register("status")}>
            <option value="">Selecione a opção</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
          <div>
            <StyledButton size="modal" type="submit">
              Salvar alterações
            </StyledButton>
            <StyledButton
              size="md"
              background="disable"
              onClick={async () => {
                await deletTech(id);
                setIsOpen(false);
              }}
            >
              Excluir
            </StyledButton>
          </div>
        </StyledModalForm>
      </div>
    </StyledModalTech>
  );
}
