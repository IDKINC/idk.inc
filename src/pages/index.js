import * as React from "react";
import styled from "styled-components";
import Button from "../components/atoms/button";
import Content from "../components/common/content";
import Newsletter from "../components/common/newsletter";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Logo from "../images/IDK-Inc-Icon.svg";


// markup
const IndexPage = () => {
  return (
    <Layout header={false}>
        <SEO />

      <Content style={{'gridGap': "4rem", 'gap': "4rem"}}>
        <LogoWrapper>
          <LogoImg src={Logo} alt="IDK Inc. Logo" />
        </LogoWrapper>
        <Button extraStyle={{'white-space': "normal"}} size="large" label="interested in giving us money?" to="/investors"/>
        <Newsletter />
      </Content>
      </Layout>
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