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

const NexusLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NexusLogoSubtext = styled.h1`
  margin: 0;
  font-size: 6rem;
  color: white;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`

const logo = css`
  width: 80vw;
  max-width: 120px;
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
      logoFile: file(relativePath: { eq: "nexus-logo-icon.png" }) {
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
            <NexusLogo>
              <NexusLogoSubtext>Daily</NexusLogoSubtext>
              <Img className={logo} fluid={data.logoFile.childImageSharp.fluid} />
              <NexusLogoSubtext>Nexus</NexusLogoSubtext>
            </NexusLogo>
            <RecruitmentLogoSubtext>Recruitment</RecruitmentLogoSubtext>
          </RecruitmentLogo>
        </Link>
      </ContentContainer>
    </HeaderWrapper>
  );
}

export default Header;