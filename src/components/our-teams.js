import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";

import Header from "../components/header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`

const teamLink = css`
  text-decoration: none;
`;

const TeamName = styled.div`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-fg);
  text-decoration: none;
  transition: color ease-out 0.3s;
`;

const TeamTile = styled.div`
  width: 270px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: background-color ease-out 0.3s;
  
  &:hover {
    background-color: var(--color-primary);

    ${TeamName} {
      color: white;
    }
  }
`;

const TeamsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  flex-wrap: wrap;
`;

function Team({ node }) {
  let { childMarkdownRemark } = node;
  let frontmatter = childMarkdownRemark.frontmatter;
  let imageData = frontmatter.icon.childImageSharp.fixed;

  return (
    <Link className={teamLink} to={node.name}>
      <TeamTile>
        <Img fixed={imageData} alt={frontmatter.title} />
        <TeamName>{frontmatter.title}</TeamName>
      </TeamTile>
    </Link>
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
              priority
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

  const teams = data.allFile.nodes.filter((node) => {
    if (node.childMarkdownRemark.frontmatter.title === "") {
      return false; // Filter out nodes with no title (editorial/extra content)
    }
    return true;
  }).sort((a, b) => {
    return (a.childMarkdownRemark.frontmatter.priority - b.childMarkdownRemark.frontmatter.priority);
  }).map((node) => <Team key={node.name} node={node} />);

  return (
    <Wrapper>
      <Header>Our Teams</Header>
      <TeamsWrapper>
        {teams}
      </TeamsWrapper>
    </Wrapper>
  );
}

export default OurTeams;
