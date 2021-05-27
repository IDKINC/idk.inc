import { Link } from "gatsby";
import * as React from "react";
import styled from 'styled-components';

const Footer = () => {


    return(
        <StyledFooter>
            <FooterContent>

            <li>&copy; 2020-2021 IDK INC.</li>
            <li><Link to="/investors">Investors</Link></li>
            </FooterContent>
        </StyledFooter>
    )
}



export default Footer;



const StyledFooter = styled.footer`
color: #fff;
align-self: flex-end;
padding: 1rem;

a {
    color: #fff;
    text-decoration: none;
    font-weight: 900;
}
`


const FooterContent = styled.ul`
list-style: none; display: flex;
gap: 1rem;
`