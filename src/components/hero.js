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

// Push content down by height+bottom margin of menu once menu is removed from normal flow
// to avoid jump in position
const stickyMenu = css`
  padding-top: 103px;
`;

const HeroText = styled.div`
  margin-right: 20px;
  font-size: 1.5rem;
  max-width: 30rem; 
`;

const viewMainSite = css`
  margin-top: 20px;
`;

function Hero({ sticking }) {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      heroText: file(relativePath: { eq: "hero-text.md" }) {
        childMarkdownRemark {
          html
        }
      }

      heroLinkFile: file(relativePath: { eq: "hero-link.json" }) {
        childDataJson {
          title
          url
        }
      }
    }
  `);

  return (
    <HeroWrapper className={sticking ? stickyMenu : ""}>
      <Anchor id="about" />
      <ContentContainer alignItems="center">
        <SplitContainer>
          <HeroText dangerouslySetInnerHTML={{__html: data.heroText.childMarkdownRemark.html}} />
          <div>
            {/* <Button to={data.heroLinkFile.childDataJson.url} text={data.heroLinkFile.childDataJson.title} /> */}
            <Button wrapperClass={viewMainSite} to="https://dailynexus.com" text="View Daily Nexus Homepage" />
          </div>
        </SplitContainer>
      </ContentContainer>
    </HeroWrapper>
  );
}

export default Hero;