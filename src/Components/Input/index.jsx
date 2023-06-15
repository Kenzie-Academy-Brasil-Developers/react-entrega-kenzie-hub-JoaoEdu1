import { forwardRef } from "react";
import { StyledInput } from "../../Styles/inputs";
import { StyledLabel, StyledParagraphError } from "../../Styles/typography";

const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <StyledLabel color="label" fontStyle="normal">
        {label}
      </StyledLabel>
      <StyledInput ref={ref} {...rest} error={error ? true : false} />
      {error ? (
        <StyledParagraphError fontColor={"var(--ColorNegative)"}>
          {error.message}
        </StyledParagraphError>
      ) : null}
    </>
  );
});

export default Input;
