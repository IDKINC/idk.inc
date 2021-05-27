import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";



// markup
const Investors = () => {
  return (
    <main>
      <SEO title="Help Us Build The Future Of DTC" />
      <Layout>

      <Content>
          <h1>Investors</h1>
          <h2>Click the link we just sent you to verify your email.</h2>
      </Content>
      </Layout>
    </main>
  );
};

export default Investors;



const Content = styled.div`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
