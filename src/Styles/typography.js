import styled, { css } from "styled-components";

export const TitleStyles = css`
  font-family: var(--font-family);
  line-height: 1.5;
  ${(fontSize) => {
    switch (fontSize) {
      case "h2":
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
      case "h3":
        return css`
          font-size: 0.875rem;
          font-weight: 700;
        `;

      default:
        return css`
          font-size: 1.125rem;
          font-weight: 700;
        `;
    }
  }}
  ${({ color }) => {
    switch (color) {
      case "white":
        return css`
          color: var(--ColorWhite);
        `;

      default:
        return css`
          color: var(--ColorGrey0);
          font-weight: 700;
        `;
    }
  }}
`;

export const StyledTitleOne = styled.h1`
  ${TitleStyles}
`;
export const StyledTitleTwo = styled.h2`
  ${TitleStyles}
`;
export const StyledTitleThree = styled.h3`
  ${TitleStyles}
`;

export const StyledParagraphAndLabel = css`
  font-family: var(--font-family);
  color: var(--ColorGrey0);
  font-size: 0.75rem;
  line-height: 1.5;

  ${({ fontStyle }) => {
    switch (fontStyle) {
      case "bold":
        return css`
          font-weight: 700;
          font-style: normal;
        `;
      case "italic":
        return css`
          font-weight: 400;
          font-style: italic;
        `;
      default:
        return css`
          font-weight: 600;
          font-style: normal;
        `;
    }
  }}
  ${({ color }) => {
    switch (color) {
      case "label":
        return css`
          color: var(--ColorGrey0);
        `;

      default:
        return css`
          color: var(--ColorGrey1);
        `;
    }
  }}
`;

export const StyledParagraph = styled.p`
  ${StyledParagraphAndLabel}
`;
export const StyledParagraphError = styled.p`
  ${StyledParagraphAndLabel}
  color: var(--ColorNegative);
`;

export const StyledLabel = styled.label`
  ${StyledParagraphAndLabel}
`;
