import styled from "styled-components";

export const StyledModalTech = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  > div {
    width: clamp(16.875rem, 57%, 23.125rem);
    height: 21.375rem;

    border-radius: 4px;
    background: var(--ColorGrey3);
  }
`;

export const StyledModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px 4px 0px 0px;
  background: var(--ColorGrey2);
  padding: 7px 10px;
`;

export const StyledModalForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  > div {
    display: flex;
    gap: 20px;
  }
  > label {
    margin-left: 3.75rem;
    margin-top: 20px;
    align-self: start;
  }
  .marginTop {
    margin-top: 0;
  }
  p {
    align-self: center;

    padding: 7px 10px;
    background: var(--ColorGrey2);
    border: 1.5px solid var(--ColorGrey0);
    border-radius: 0.25rem;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 1rem;

    color: var(--ColorGrey0);
    width: 15.375rem;
    height: 35px;
    cursor: pointer;

    :focus {
      outline: none;
    }
  }
`;
