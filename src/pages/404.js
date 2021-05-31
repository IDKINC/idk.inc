import { Link } from "gatsby";
import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import SEO from "../components/seo";

import Logo from "../images/newIDKLogo--temp--crop.png";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <GlobalStyle />
      <SEO />
      <Content>
        <LogoWrapper>
          <LogoImg src={Logo} alt="IDK Inc. Logo" />
          <NotFoundText>
            <h1>Oops...</h1>
            <h2>Either You Screwed Up Or We Did.</h2>
            <Link to="/">&laquo; Let's Try This Again</Link>
          </NotFoundText>
        </LogoWrapper>
      </Content>
    </main>
  );
};

export default NotFoundPage;

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
  filter: saturate(0);
  transform: rotate(3deg);
  opacity: 0.8;
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

const NotFoundText = styled.div`
  color: #fff;
  font-weight: 900;
  text-align: center;

  h1 {
    margin: 0;
  }
  a {
    color: #fff;
  }
`;

const GlobalStyle = createGlobalStyle`
main{
  min-height: 100vh;
  display: grid;
  place-items: center;
}
`;
