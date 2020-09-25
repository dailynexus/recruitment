import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";

import ContentContainer from "../components/content-container";
import SplitContainer from "../components/split-container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
`;

const art = css`
  width: 360px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;

const AboutUsText = styled.div`
  max-width: 34rem;
  font-size: 1.5rem; 
`;

const Header = styled.h1`
  font-size: 3rem;
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
    <Wrapper>
      <ContentContainer alignItems="center">
        <SplitContainer>
          <Img className={art} fluid={data.artFile.childImageSharp.fluid} />
          <div>
            <Header>About the Nexus</Header>
            <AboutUsText dangerouslySetInnerHTML={{__html: data.aboutUsText.childMarkdownRemark.html}} />
          </div>
        </SplitContainer>
      </ContentContainer>
    </Wrapper>
  );
}

export default AboutUs;
