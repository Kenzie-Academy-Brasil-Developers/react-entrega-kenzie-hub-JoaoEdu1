import styled from "styled-components";

export const StyledMainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
  padding: 0 1rem;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: clamp(16.875rem, 57%, 61.875rem);
  }
  > ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    width: clamp(16.875rem, 57%, 58.75rem);
    padding: 2rem 0;

    min-height: 416px;
    border-radius: 4px;
    background: var(--ColorGrey3);
    margin-bottom: 1.25rem;

    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: clamp(14.875rem, 91%, 53.75rem);
      padding: 15px 20px;

      border-radius: 4px;
      background: var(--ColorGrey4);
      cursor: pointer;
      :hover {
        background: var(--ColorGrey2);
      }
    }
  }
`;
