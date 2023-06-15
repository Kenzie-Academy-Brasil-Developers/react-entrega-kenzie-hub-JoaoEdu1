import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: clamp(16.875rem, 50%, 20.3125rem);
    gap: 20px;
    background: var(--ColorGrey3);
    border-radius: 4px;
    padding: 2rem 0;
  }
`;
