import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
`;

export const CenteredWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LoginFormWrapper = styled(CenteredWrapper)`
  background-color: #E3E3E6;
  width: 100%;
`;

export const LoginFormContentWrapper = styled(CenteredWrapper)`
  flex-direction: column;
  max-width: 400px;
  gap: 20px;

  * {
    width: 100%;
  }
`;
