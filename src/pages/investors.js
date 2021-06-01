import * as React from "react";
import styled from "styled-components";
import Button from "../components/atoms/button";
import Buttons from "../components/atoms/buttons";
import Content from "../components/common/content";
import Layout from "../components/layout";
import SEO from "../components/seo";


// markup
const Investors = () => {
  return (
    <Layout>
        <SEO title="Help Us Build The Future Of DTC" />
        <Content>
          <h1>investors</h1>
          <h2>want to help us grow?</h2>
          <Buttons>
            {/* <Button
              white
              icon="download"
              to="/static/deck.pdf"
              label="download our deck"
            /> */}
            <Button
              icon="dollar-sign"
              href="mailto:moneyplease@idk.inc"
              label="email moneyplease@idk.inc"
            />
          </Buttons>
        </Content>
      </Layout>
  );
};

export default Investors;

