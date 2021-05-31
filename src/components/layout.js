/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "./fontawesome";
import Header from "./common/header";
import Footer from "./common/footer";

const Layout = ({ children, footerCTA, header = true }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={header ? "header": null}>
      {header ? <Header siteTitle={data.site.siteMetadata.title} /> : null}

      {children}

      <Footer footerCTA={footerCTA} />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
