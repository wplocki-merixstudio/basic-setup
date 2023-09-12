import React from "react";
import styled from "styled-components";

import "./styles.css";

import { Login } from './features/Login';

function App() {
  return <Login />
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
