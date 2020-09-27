import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";

import Button from "../components/button";
import ContentContainer from "../components/content-container";
import SplitContainer from "../components/split-container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ecf0f2;
  padding: 48px 0;
`;

const RecruitmentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const logo = css`
  width: 80vw;
  max-width: 720px;
`;

const RecruitmentLogoSubtext = styled.h2`
  margin: 0;
  font-size: 3rem;
  color: #000;
  text-transform: uppercase;
`;

const HeroText = styled.div`
  font-size: 1.5rem;
  max-width: 30rem; 
`;

function Hero() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      logoFile: file(relativePath: { eq: "nexus-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      heroText: file(relativePath: { eq: "hero-text.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <Wrapper>
      <ContentContainer alignItems="center">
        <RecruitmentLogo>
          <Img className={logo} fluid={data.logoFile.childImageSharp.fluid} />
          <RecruitmentLogoSubtext>Recruitment</RecruitmentLogoSubtext>
        </RecruitmentLogo>
        <SplitContainer>
          <HeroText dangerouslySetInnerHTML={{__html: data.heroText.childMarkdownRemark.html}} />
          <Button to="https://forms.gle/XcL7zU9Q4ssxfCsi8" text="Orientation Signup" />
        </SplitContainer>
      </ContentContainer>
    </Wrapper>
  );
}

export default Hero;
