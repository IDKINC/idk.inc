import * as React from "react";
import styled from "styled-components";
import Newsletter from "../components/common/newsletter";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Logo from "../images/newIDKLogo--temp.png";


// markup
const IndexPage = () => {
  return (
    <main>
      <SEO />
      <Layout header={false}>

      <Content>
        <LogoWrapper>
          <LogoImg src={Logo} alt="IDK Inc. Logo" />
        </LogoWrapper>
        <Newsletter />
      </Content>
      </Layout>
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
