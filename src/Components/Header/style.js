import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.875rem 0;
  > div {
    display: flex;
    justify-content: space-between;
    width: clamp(16.875rem, 50%, 20.3125rem);
  }
`;
