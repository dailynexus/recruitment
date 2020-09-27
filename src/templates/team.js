import React from "react";
import { graphql } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const HeaderWrapper = styled.div`
  padding-bottom: 25px;
  border-bottom: 5px solid #c4c4c4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h1`
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 5rem;
  font-weight: normal;
`;

const icon = css`
  width: 150px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const editorImage = css`
  flex: 1;
`

const Text = styled.div`
  width: 100%;
  max-width: 30rem;
  font-family: "PT Sans", "Helvetica", sans-serif;
  font-size: 1.25rem;
`;

function Team({ data }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>{data.file.childMarkdownRemark.frontmatter.title}</Header>
        <Img className={icon} fluid={data.file.childMarkdownRemark.frontmatter.icon.childImageSharp.fluid} />
      </HeaderWrapper>
      <ContentWrapper>
        <Img className={editorImage} fluid={data.file.childMarkdownRemark.frontmatter.image.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }} />
        <Text dangerouslySetInnerHTML={{__html: data.file.childMarkdownRemark.html}} />
      </ContentWrapper>
    </Wrapper>
  );
}

export const pageQuery = graphql`
query TeamQuery($name: String!) {
  file(name: {eq: $name}, sourceInstanceName: {eq: "teams"}) {
    childMarkdownRemark {
      frontmatter {
        title
        icon {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
    name
  }
}
`;

export default Team;
