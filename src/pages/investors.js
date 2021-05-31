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
          <h1>Investors</h1>
          <h2>Want to help us grow?</h2>
          <Buttons>
            <Button
              white
              icon="download"
              to="/deck.pdf"
              label="Download Our Deck"
            />
            <Button
              icon="dollar-sign"
              href="mailto:moneyplease@idk.inc"
              label="Email moneyplease@idk.inc"
            />
          </Buttons>
        </Content>
      </Layout>
  );
};

export default Investors;

