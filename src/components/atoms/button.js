/**
 * PageTitle component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../breakpoints";

const Button = ({
  label,
  onClick,
  type,
  extraStyle,
  icon,
  href,
  to,
  white = false,
  blue = false,
  red = false,
  green = false,
  size = "medium",
  ...others
}) => {
  const computedClass =
    "button button--" +
    size +
    (white ? " button--white" : "") +
    (blue ? " button--blue" : "") +
    (red ? " button--red" : "") +
    (green ? " button--green" : "") +
    (label ? " button--label" : " button--no-label");

  if (href) {
    return (
      <StyledA
        href={href}
        target="_blank"
        rel="noopener"
        style={extraStyle}
        className={computedClass}
        {...others}
      >
        {icon ? (
          <FontAwesomeIcon icon={icon} />
        ) : null}
        {label ? (
          <span
            className="label"
            dangerouslySetInnerHTML={{ __html: label }}
          ></span>
        ) : null}
      </StyledA>
    );
  } else if (onClick) {
    return (
      <StyledButton
        onClick={onClick}
        style={extraStyle}
        className={computedClass}
        {...others}
      >
        {icon ? <FontAwesomeIcon icon={icon} /> : ""}
        <span
          className="label"
          dangerouslySetInnerHTML={{ __html: label }}
        ></span>
      </StyledButton>
    );
  } else if (to) {
    return (
      <StyledLink
        to={to}
        style={extraStyle}
        className={computedClass}
        {...others}
      >
        {icon ? <FontAwesomeIcon icon={icon} /> : ""}
        <span
          className="label"
          dangerouslySetInnerHTML={{ __html: label }}
        ></span>
      </StyledLink>
    );
  }
};

Button.propTypes = {
  // children: PropTypes.node.isRequired,
};

export default Button;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 0.5em;
  border-radius: var(--border-radius);
  width: 100%;
  text-align: center;
  transition: 100ms;
  color: #000;
  background: var(--green);
  white-space: nowrap;
  border: 1px solid var(--green);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  transition: 500ms;
  gap: 0.5em;
  grid-gap: 0.5em;

  svg {
    width: 1em;
    vertical-align: middle;
    flex-shrink: 0;
  }

  &:hover {
    color: #000;
    background: var(--dark-green);
    opacity: 1;
    transition: 100ms;
  }

  &:focus {
    outline: 1px dotted #000;
  }

  &:active {
    background: var(--dark-blue);
    opacity: 0.8;
  }

  &.button--white {
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &.button--blue {
    border: 1px solid var(--blue);
    background: var(--blue);
    color: #fff;

    &:hover {
      background: var(--dark-blue);
    }
  }

  &.button--red {
    border: 1px solid var(--red);
    background: var(--red);
    color: #fff;

    &:hover {
      background: var(--dark-red);
    }
  }

  &.button--green {
    border: 1px solid var(--green);
    background: var(--green);
    color: #fff;

    &:hover {
      background: var(--dark-green);
    }
  }

  &.button--medium {
  }
  &.button--large {
    font-size: 1rem;
    width: 100%;
    font-weight: 900;
    margin: 0 auto;
    letter-spacing: 0.05em;

    @media ${breakpoints.tablet} {
      span {
        white-space: nowrap;
      }
    }

    @media ${breakpoints.laptop} {
      font-size: 1.5rem;
      padding: 0.5rem 2rem;
    }
  }


  &.button--no-label{
    grid-gap: 0;
    gap: 0;
  }
`;

const StyledA = styled(StyledLink).attrs({
  as: "a",
})`
  border: none;
  cursor: pointer;
`;

const StyledButton = styled(StyledLink).attrs({
  as: "button",
})`
  border: none;
  cursor: pointer;
`;
