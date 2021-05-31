/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Circle = ({ children, row = true }) => {
  return <StyledCircle>{children}</StyledCircle>;
};

Circle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Circle;

const StyledCircle = styled.div`
  display: grid;
    place-items: center;
    margin: 1rem auto 2rem;
    background: #fff;
    color: #000;
    padding: 0.5rem;
    border-radius: 50%;
    width: calc(3.5ch + 1rem);
    height: calc(3.5ch + 1rem);
    line-height: 1;
    font-weight: 900;
`;
