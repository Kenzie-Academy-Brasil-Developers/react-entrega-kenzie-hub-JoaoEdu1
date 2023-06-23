import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 4px;

  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  color: var(--ColorWhite);

  ${({ fontSize }) => {
    switch (fontSize) {
      case "bg":
        return css`
          font-size: 1.6875rem;
        `;

      default:
        return css`
          font-size: 1rem;
        `;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          height: 2rem;
          width: 2.375rem;
        `;
      case "md":
        return css`
          width: 4.25rem;
          height: 3rem;
        `;
      case "modal":
        return css`
          width: 9.875rem;
          height: 3rem;
        `;

      default:
        return css`
          height: 3rem;
          width: 15.375rem;
        `;
    }
  }}

  ${({ background }) => {
    switch (background) {
      case "disable":
        return css`
          background: var(--ColorGrey1);
          border: 1.5px solid var(--ColorGrey1);
          :hover {
            background: var(--ColorGrey2);
            border: 1.5px solid var(--ColorGrey2);
          }
        `;
      case "modal":
        return css`
          background: var(--ColorGrey2);
          border: 1.5px solid var(--ColorGrey2);
          :hover {
            background: var(--ColorGrey2);
            border: 1.5px solid var(--ColorGrey2);
          }
        `;
      case "md":
        return css`
          background: var(--ColorGrey3);
          border: 1.5px solid var(--ColorGrey3);
          :hover {
            background: var(--ColorGrey2);
            border: 1.5px solid var(--ColorGrey2);
          }
        `;
      case "negative":
        return css`
          background: var(--ColorColorPrimaryDisable);
          border: 1.5px solid var(--ColorColorPrimaryDisable);
        `;

      default:
        return css`
          background: var(--ColorColorPrimary);
          border: 1.5px solid var(--ColorColorPrimary);
          :hover {
            background: var(--ColorColorPrimary50);
            border: 1.5px solid var(--ColorColorPrimary50);
          }
        `;
    }
  }}
`;
