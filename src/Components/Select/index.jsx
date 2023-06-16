import { forwardRef } from "react";
import { StyledSelect } from "../../Styles/inputs";
import { StyledLabel, StyledParagraphError } from "../../Styles/typography";

const Select = forwardRef(({ label, error, options, ...rest }, ref) => {
  return (
    <>
      <StyledLabel color="label" fontStyle="normal">
        {label}
      </StyledLabel>
      <StyledSelect ref={ref} {...rest} error={error ? true : false}>
        <option value="" label="Selecione o Módulo" />
        <option value="Primeiro Módulo" label="Primeiro Módulo" />
        <option value="Segundo Módulo" label="Segundo Módulo" />
        <option value="Terceiro Módulo" label="Terceiro Módulo" />
        <option value="Quarto Módulo" label="Quarto Módulo" />
        <option value="Quinto Módulo" label="Quinto Módulo" />
        <option value="Sexto Módulo" label="Sexto Módulo" />
      </StyledSelect>
      {error ? (
        <StyledParagraphError fontColor="var(--ColorNegative)">
          {error.message}
        </StyledParagraphError>
      ) : null}
    </>
  );
});

export default Select;
