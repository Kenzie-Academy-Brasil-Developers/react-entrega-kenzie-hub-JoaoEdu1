import styled, { css } from "styled-components";

const styledInputs = css`
  padding: 7px 10px;
  background: var(--ColorGrey2);
  border: 1.5px solid var(--ColorGrey0);
  border-radius: 0.25rem;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;

  color: var(--ColorGrey0);

  ${({ error }) => {
    if (error) {
      return css`
        border: 1.5px solid var(--ColorNegative);
      `;
    }
  }}

  :focus {
    outline: none;
  }
`;

export const StyledInput = styled.input`
  ${styledInputs}
`;
export const StyledSelect = styled.select`
  ${styledInputs}
  width: 15.375rem;
`;
