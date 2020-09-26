import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { styled } from "linaria/react";
import Img from "gatsby-image";

import Header from "../components/header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`

const TeamTile = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;


function Team({ node }) {
  let { childMarkdownRemark } = node;
  let frontmatter = childMarkdownRemark.frontmatter;
  let imageData = frontmatter.icon.childImageSharp.fixed;

  return (
    <TeamTile>
      <Img fixed={imageData} alt={frontmatter.title} />
    </TeamTile>
  );
}

function OurTeams() {
  const data = useStaticQuery(graphql`
    query OurTeamsQuery {
      allFile(filter: {sourceInstanceName: {eq: "teams"}}) {
        nodes {
          name
          childMarkdownRemark {
            frontmatter {
              title
              icon {
                childImageSharp {
                  fixed(width: 200, height: 200, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const teams = data.allFile.nodes.map((node) => <Team key={node.name} node={node} />);

  return (
    <Wrapper>
      <Header>Our Teams</Header>
      {teams}
    </Wrapper>
  );
}

export default OurTeams;
