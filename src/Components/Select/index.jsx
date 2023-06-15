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
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
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
