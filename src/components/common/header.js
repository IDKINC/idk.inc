import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Logo from "../../images/IDK-Inc-Icon.svg";
import { breakpoints } from "../breakpoints";

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper to="/">
        <LogoImg src={Logo} alt="IDK Inc. Logo" />
      </LogoWrapper>
    </StyledHeader>
  );
};

export default Header;

const headerHeight = "15vh";
const smallHeaderHeight = "15vh";

const StyledHeader = styled.header`
  color: #fff;
  align-self: flex-start;
  width: 100%;
  height: ${smallHeaderHeight};
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media ${breakpoints.tablet}{
    height: ${headerHeight};
  }
`;

const LogoWrapper = styled(Link)`
  height: ${smallHeaderHeight};
  padding: 1rem;
  width: auto;
  display: block;
  @media ${breakpoints.tablet}{
    height: ${headerHeight};
  }
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;
