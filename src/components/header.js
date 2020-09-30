import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";

import ContentContainer from "../components/content-container";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary);
  padding-top: 48px;
`;

const logoLink = css`
  text-decoration: none;
`;

const RecruitmentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const logo = css`
  width: 80vw;
  max-width: 720px;
`;

const RecruitmentLogoSubtext = styled.h2`
  margin: 0;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logoFile: file(relativePath: { eq: "nexus-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeaderWrapper>
      <ContentContainer alignItems="center">
        <Link to="/" className={logoLink}>
          <RecruitmentLogo>
            <Img className={logo} fluid={data.logoFile.childImageSharp.fluid} />
            <RecruitmentLogoSubtext>Recruitment</RecruitmentLogoSubtext>
          </RecruitmentLogo>
        </Link>
      </ContentContainer>
    </HeaderWrapper>
  );
}

export default Header;