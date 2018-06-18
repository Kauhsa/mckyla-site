import React from "react";
import Helmet from "react-helmet";
import { css, injectGlobal } from "emotion";
import styled from "react-emotion";

import headerBackground from "../images/header-background.png";
import logo from "../images/logo.svg";
import media from "../utils/media";

import reset from "css-wipe/js";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600,900');

  ${reset};

  html {
    font-size: 10px;
    min-height: 100%;

    ${media.medium(css`
      font-size: 12px;
    `)}
  }

  body {
    background-color: white;
    color: #333333;
    font-family: Raleway;
    min-height: 100%;
  }
`;

const Header = styled.div`
  background-image: url('${headerBackground}');
  background-color: #DD4200;
  background-position: center 20%;
  background-size: cover;
  margin-bottom: 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0.5px 0.5px;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-bottom: 5rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  padding: 3rem;

  ${media.medium(css`
    padding: 5rem 10rem;
  `)};
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet htmlAttributes={{ lang: "fi" }}>
      <title>McKylän Superarcade</title>
    </Helmet>

    <Header>
      <Logo src={logo} />
    </Header>
    <Container>{children()}</Container>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
