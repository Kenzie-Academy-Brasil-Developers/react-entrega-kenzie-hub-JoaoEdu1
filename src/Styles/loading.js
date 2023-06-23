import styled from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(50vh - 1rem);
  width: calc(100vw - 2rem);
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
