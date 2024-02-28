import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  justify-content: center;
  background: #575757;
`;

export const StyledButton = styled.button`
  width: 333px;
  height: 36px;
  border-radius: 28px;
  border: 1px solid rgba(129, 122, 94, 0.3);
  background: #f5e3e2;
  margin-top: var(--margin-top);
  cursor: pointer;
`;

export const SetContainer = styled.fieldset`
  width: 95%;
  padding: 10px 25px;
  border-radius: 0.5rem;
  border: 1px solid rgba(129, 122, 94, 0.3);
  margin: 0 auto;
  position: relative;
  & > legend {
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: 25px;
    padding: 0 15px;
  }
`;
