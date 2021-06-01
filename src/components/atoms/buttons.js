/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {breakpoints} from "../breakpoints";


const Buttons = ({ children, row = true }) => {
  return <StyledButtons>{children}</StyledButtons>;
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Buttons;

const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
    margin: 1rem auto;
  width: 100%;
  gap: 1rem;
  grid-gap: 1rem;

  @media ${breakpoints.laptop} {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  }
`;
