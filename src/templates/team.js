import React from "react";
import { graphql } from "gatsby";
import { styled } from "linaria/react";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

function Team({ data }) {
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{__html: data.file.childMarkdownRemark.html}} />
    </Wrapper>
  );
}

export const pageQuery = graphql`
query TeamQuery($name: String!) {
  file(name: {eq: $name}, sourceInstanceName: {eq: "teams"}) {
    childMarkdownRemark {
      frontmatter {
        title
      }
      html
    }
    name
  }
}
`;

export default Team;
