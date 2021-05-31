import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "../components/atoms/button";
import Circle from "../components/atoms/circle";
import Content from "../components/common/content";
import Layout from "../components/layout";
import SEO from "../components/seo";

// markup
const SignupSuccess = () => {
  return (
    <Layout>
      <SEO />

      <Content>
        <h1>Thanks For Signing Up!</h1>
        <h2>Click the link we just sent you to verify your email.</h2>
        <Circle>AND</Circle>
        <Button
          size="large"
          icon={["fab", "twitter"]}
          href="https://twitter.com/idkinc"
          label="Follow Us On Twitter"
        />
      </Content>
    </Layout>
  );
};

export default SignupSuccess;
