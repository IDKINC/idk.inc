import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Button from "../atoms/button";
import { breakpoints } from "../breakpoints";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <li>&copy; 2020-2021 idk inc.</li>
        <li>
          <Link to="/investors">investors</Link>
        </li>
        <li>
          <Button
            href="https://twitter.com/idkinc"
            white
            icon={["fab", "twitter"]}
            extraStyle={{'border': 'none'}}
          />
        </li>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  color: #fff;
  align-self: flex-end;
  padding: 1rem;
  margin-top: 3rem;

  font-size: 0.8rem;
  @media ${breakpoints.mobileL} {

}
@media ${breakpoints.tablet} {

}
@media ${breakpoints.laptop} {
  font-size: 1rem;

}
@media ${breakpoints.laptopL} {
  
}
@media ${breakpoints.desktop} {

}


  a {
    color: #fff;
    text-decoration: none;
    font-weight: 900;
  }
`;

const FooterContent = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-direction: column;

  @media ${breakpoints.tablet} {
    flex-direction: row;
  }

`;
