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
  size = "medium",
  ...others
}) => {
  const computedClass =
    "button button--" + size + (white ? " button--white" : "");

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
        ) : (
          <FontAwesomeIcon icon="external-link-alt" />
        )}
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  transition: 500ms;
  gap: 0.5em;

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
      text-shadow: 0 1px 1px #000;

      svg {
        filter: drop-shadow(0 1px 1px #000);
      }
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
