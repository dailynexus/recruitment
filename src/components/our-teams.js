import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
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

const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function Team({ node }) {
  let { childMarkdownRemark } = node;
  let frontmatter = childMarkdownRemark.frontmatter;
  let imageData = frontmatter.icon.childImageSharp.fixed;

  return (
    <Link to={node.name}>
      <TeamTile>
        <Img fixed={imageData} alt={frontmatter.title} />
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
    if (node.childMarkdownRemark.frontmatter.title == "") {
      return false; // Filter out nodes with no title (editorial/extra content)
    }
    return true;
  }).sort((a, b) => {
    console.log("Sorting nodes", a.childMarkdownRemark.frontmatter.title, b.childMarkdownRemark.frontmatter.title);
    console.log(a, b);
    console.log("Difference", (a.childMarkdownRemark.frontmatter.priority - b.childMarkdownRemark.frontmatter.priority));
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
