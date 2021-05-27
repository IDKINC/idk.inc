import * as React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";



// markup
const SignupSuccess = () => {
  return (
    <main>
      <GlobalStyle/>
      <SEO />
      <Layout>

      <Content>
          <h1>Thanks For Signing Up!</h1>
          <h2>Click the link we just sent you to verify your email.</h2>
      </Content>
      </Layout>
    </main>
  );
};

export default SignupSuccess;



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
