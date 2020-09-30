import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { styled } from "linaria/react";

import Anchor from "../components/styled/anchor";
import Button from "../components/button";
import ContentContainer from "../components/content-container";
import SplitContainer from "./styled/split-container";
import { css } from "linaria";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg);
  padding-bottom: 48px;
`;

const HeroText = styled.div`
  margin-right: 20px;
  font-size: 1.5rem;
  max-width: 30rem; 
`;

const OrientationNotice = styled.div`
  background-color: var(--color-primary);
  color: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  font-size: 2rem;
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
          <div>
            <OrientationNotice>
              <p><strong>Session 1:</strong> Tue. Oct. 6, 6 p.m.</p>
              <p><strong>Session 2:</strong> Wed. Oct. 7, 6 p.m.</p>
            </OrientationNotice>
            <Button to="https://forms.gle/XcL7zU9Q4ssxfCsi8" text="Orientation Signup" />
          </div>
        </SplitContainer>
      </ContentContainer>
    </HeroWrapper>
  );
}

export default Hero;