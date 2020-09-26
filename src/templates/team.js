import React from "react";
import { graphql } from "gatsby";

function Team({ data }) {
  return (
    <div dangerouslySetInnerHTML={{__html: data.file.childMarkdownRemark.html}} />
  );
}

export const pageQuery = graphql`
query TeamQuery($name: String!) {
  file(name: {eq: $name}, sourceInstanceName: {eq: "teams"}) {
    childMarkdownRemark {
      html
    }
    name
  }
}
`;

export default Team;
