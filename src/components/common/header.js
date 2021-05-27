import { Link } from "gatsby";
import * as React from "react";
import styled from 'styled-components';
import Logo from "../../images/newIDKLogo--temp.png";


const Header = () => {


    return(
        <StyledHeader>
        <LogoWrapper to ="/">
          <LogoImg src={Logo} alt="IDK Inc. Logo" />
        </LogoWrapper>        </StyledHeader>
    )
}



export default Header;

const headerHeight = '20vh';


const StyledHeader = styled.header`
color: #fff;
align-self: flex-start;
width: 100%;
height: ${headerHeight};
display: grid;
grid-template-columns: auto 1fr 1fr;
align-items: center;
justify-content: center;

`

const LogoWrapper = styled(Link)`
height: ${headerHeight};
width: auto;
  display: block;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;

`;