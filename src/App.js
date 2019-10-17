import React from "react";
import styled from "styled-components";

import WillfulLogo from "./willful-icon.png";

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e2f6ff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: 0;
  width: 100%;
  padding: 16px;
  background-color: #0064dc;
  color: #fff;
`;

const url = "https://api.github.com/repos/facebook/react";

function App() {
  const handleClick = () => {
    // TODO:
    // fetch data from url and display repo description in a toast message
    console.log("click");
  };

  return (
    <Layout>
      <Button type="button" onClick={handleClick}>
        what is react?
      </Button>
    </Layout>
  );
}

export default App;
