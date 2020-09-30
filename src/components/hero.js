import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { styled } from "linaria/react";

import Anchor from "../components/styled/anchor";
import Button from "../components/button";
import ContentContainer from "../components/content-container";
import SplitContainer from "./styled/split-container";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ecf0f2;
  padding-bottom: 48px;
`;

const HeroText = styled.div`
  margin-right: 20px;
  font-size: 1.5rem;
  max-width: 30rem; 
`;

function Hero() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      heroText: file(relativePath: { eq: "hero-text.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <HeroWrapper>
      <Anchor id="about" />
      <ContentContainer alignItems="center">
        <SplitContainer>
          <HeroText dangerouslySetInnerHTML={{__html: data.heroText.childMarkdownRemark.html}} />
          <Button to="https://forms.gle/XcL7zU9Q4ssxfCsi8" text="Orientation Signup" />
        </SplitContainer>
      </ContentContainer>
    </HeroWrapper>
  );
}

export default Hero;