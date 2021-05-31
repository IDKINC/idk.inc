import { Link } from "gatsby";
import * as React from "react";
import styled from 'styled-components';
import {breakpoints} from "../breakpoints";


const Content = styled.div`
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${breakpoints.tablet} {
    max-width: 65%;
  }
  @media ${breakpoints.laptop} {
    max-width: 50%;
  }

`;


export default Content;