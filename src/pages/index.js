import * as React from "react";
import styled, {createGlobalStyle} from "styled-components";
import SEO from "../components/seo";

import Logo from "../images/newIDKLogo--temp.png";


// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle/>
      <SEO />
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
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
main{
  min-height: 100vh;
  display: grid;
  place-items: center;
}
`
