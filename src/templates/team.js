import React, { useState } from "react";
import { graphql } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import Img from "gatsby-image";

import Button from "../components/button";
import Menu from "../components/menu";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 112px 50px 0 50px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

const TeamHeaderWrapper = styled.div`
  padding-bottom: 24px;
  border-bottom: 2px solid #c4c4c4;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NameEditorialGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  @media only screen and (max-width: 640px) {
    align-items: center;
  }
`;

const TeamName = styled.h1`
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  font-weight: normal;

  @media only screen and (max-width: 640px) {
    min-width: 8rem;
    font-size: 3rem;
    word-break: break-all;
  }
`;

const EditorialToggle = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
  font-size: 1.25rem;
  text-decoration: underline;
  color: var(--color-primary);
  cursor: pointer;
`;

const reversed = css`
  flex-direction: row-reverse;
`;

const EditorialLinkText = styled.div`
  margin-left: 1rem;
`;

const arrowIcon = css`
  margin-left: 1rem;
`;

const icon = css`
  margin-left: 20px;
  width: 150px;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 2px solid #c4c4c4;
  margin-bottom: 24px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  padding-left: 32px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 32px;
  }
`;

const editorImage = css`
  margin-bottom: 16px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
`;

const Text = styled.div`
  flex: 1;
  max-width: 30rem;
  font-family: "PT Sans", "Helvetica", sans-serif;
  font-size: 1.25rem;
`;

const ArticlesHeader = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    text-align: center;
  }
`;

const Articles = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: space-between;
`;

const ArticleLink = styled.a`
  padding: 10px 0;
  text-decoration: none;
`;

const ArticleTile = styled.div`
  height: 100%;
  margin: 10px;
  padding: 20px;
  max-width: 21rem;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  color: white;
`;

function FeaturedArticle({ article }) {
  let backgroundStyle = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"" + article.image + "\")";

  return (
    <ArticleLink href={article.url} target="_blank">
      <ArticleTile style={{ background: backgroundStyle, backgroundSize: "cover" }}>
        {article.title}
      </ArticleTile>
    </ArticleLink>
  );
}

const ImageContainer = styled.div`
  
`

function ImageWrapper({ editor }) {
  // let backgroundStyle = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"" + article.image + "\")";

  return (
    <>
      <Img fluid={editor.path.childImageSharp.fluid}
        className={editorImage}
        imgStyle={{ objectFit: "contain" }}/>
      <h2>{editor.name}</h2>
      <h2>{editor.role}</h2>
    </>
  );
}

function Team({ data }) {
  const [editorialView, setEditorialView] = useState(false);

  const featured = data.file.childMarkdownRemark.frontmatter.featured;
  let featuredArticles;
  if (featured) {
    featuredArticles = featured.map((article) => <FeaturedArticle article={article} />);
  }

  const editors = data.file.childMarkdownRemark.frontmatter.editors;
  let editorsImgs;
  if (editors) {
    editorsImgs = editors.map((editor) => <ImageWrapper editor={editor} />);
  }

  let editorialLink;
  if (data.file.childMarkdownRemark.frontmatter.editorial) {
    let linkText;
    if (editorialView) {
      linkText = (
        <>
          <EditorialLinkText>
            View general info 
            <FontAwesomeIcon className={arrowIcon} icon={faAngleDoubleLeft} />
          </EditorialLinkText>
        </>
      );
    } else {
      linkText = (
        <>
          <EditorialLinkText>
            Apply for editorial positions
            <FontAwesomeIcon className={arrowIcon} icon={faAngleDoubleRight} />
          </EditorialLinkText>
        </>
      );
    }

    // Use row-reverse if showing editorial view with arrows on left, so that the text is used
    // to calculate baseline for flex positioning instead of the arrows
    editorialLink = <EditorialToggle
      onClick={() => setEditorialView(!editorialView)}
      className={editorialView ? reversed : ""}>
        {linkText}
      </EditorialToggle>;
  }

  let mainText;
  if (editorialView) {
    mainText = data.file.childMarkdownRemark.frontmatter.editorial.childMarkdownRemark.html;
  } else {
    mainText = data.file.childMarkdownRemark.html;
  }

  return (
    <Layout sticking={true}>
      <SEO title={data.file.childMarkdownRemark.frontmatter.title} />
      <Menu sticking={true} />
      <Wrapper>
        <TeamHeaderWrapper>
          <NameEditorialGroup>
            <TeamName>{data.file.childMarkdownRemark.frontmatter.title}</TeamName>
            {editorialLink}
          </NameEditorialGroup>
          <Img className={icon} fluid={data.file.childMarkdownRemark.frontmatter.icon.childImageSharp.fluid} />
        </TeamHeaderWrapper>
        <ContentWrapper>
          <Text dangerouslySetInnerHTML={{__html: mainText}} />
          <RightColumn>
            {editorsImgs && (
              <ImageContainer>{editorsImgs}</ImageContainer>
            )}
            <Button to={"mailto:" + data.file.childMarkdownRemark.frontmatter.contact}
              text={"Contact"}
              size="small" />
          </RightColumn>
        </ContentWrapper>
        {featuredArticles && (
          <>
            <ArticlesHeader>Featured Articles</ArticlesHeader>
            <Articles>
              {featuredArticles}
            </Articles>
          </>
        )}
      </Wrapper>
    </Layout>
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
        editors {
          name
          role
          path {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        contact
        editorial {
          childMarkdownRemark {
            html
          }
        }
        featured {
          image
          title
          url
        }
      }
      html
    }
    name
  }
}
`;

export default Team;
