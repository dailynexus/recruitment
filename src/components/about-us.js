import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";

import ContentContainer from "../components/content-container";
import SplitContainer from "../components/styled/split-container";

const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;
`;

const art = css`
  flex: 1;
  max-width: 360px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const AboutUsText = styled.div`
  max-width: 34rem;
  font-size: 1.5rem; 
`;

const textGroup = css`
  margin-left: 30px;
  flex: 1;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Header = styled.h1`
  font-size: 3rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

function AboutUs() {
  const data = useStaticQuery(graphql`
    query AboutUsQuery {
      artFile: file(relativePath: { eq: "nexus-art-polaroid.png" }) {
        childImageSharp {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      aboutUsText: file(relativePath: { eq: "about-us.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <AboutUsWrapper>
      <ContentContainer alignItems="center">
        <SplitContainer>
          <Img className={art} fluid={data.artFile.childImageSharp.fluid} />
          <div className={textGroup}>
            <Header>About the Nexus</Header>
            <AboutUsText dangerouslySetInnerHTML={{__html: data.aboutUsText.childMarkdownRemark.html}} />
          </div>
        </SplitContainer>
      </ContentContainer>
    </AboutUsWrapper>
  );
}

export default AboutUs;
