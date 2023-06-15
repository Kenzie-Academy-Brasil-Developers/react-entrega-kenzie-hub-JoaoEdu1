import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 0 1rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const StyledDivUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0;
  border-bottom: 1.5px solid var(--ColorGrey3);
  border-top: 1.5px solid var(--ColorGrey3);
`;
