import * as React from "react";
import styled from "styled-components";

import Logo from "../images/IDK_INC_Logo.svg";

// styles
const pageStyles = {
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>IDK INC.</title>
      <Content>
        <LogoWrapper>
          <LogoImg src={Logo} alt="IDK Inc. Logo" />
        </LogoWrapper>
      </Content>
    </main>
  );
};

export default IndexPage;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LogoImg = styled.img`
  width: 50%;
  display: block;
`;

const Content = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
