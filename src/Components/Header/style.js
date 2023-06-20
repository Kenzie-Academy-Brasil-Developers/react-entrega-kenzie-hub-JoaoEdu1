import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.875rem 0;
  > div {
    display: flex;
    justify-content: space-between;
    width: clamp(16.875rem, 80%, 61.875rem);
    ${({ maxWidth }) => {
      switch (maxWidth) {
        case "small":
          return css`
            max-width: 21.875rem;
          `;
      }
    }}
  }
`;
