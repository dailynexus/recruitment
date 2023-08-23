import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { styled } from "linaria/react";

import ContentContainer from "./content-container";
import SectionHeader from "./styled/section-header";
import Anchor from "./styled/anchor";
import Img from "gatsby-image";
import { css } from "linaria";

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 48px 0;
  background-color: var(--color-bg);
`;

const TestimonialImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const TestimonialImageWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const photo = css`
  border-radius: 20px;
`;

const Name = styled.div`
  font-size: 1.5rem;
`;

const Email = styled.a`
  color: var(--color-primary-alt);
  text-decoration: none;
`;

function TestimonialImage({ node }) {
  return (
    <TestimonialImageWrapper data-aos="fade-up">
      <Img className={photo} fluid={node.image.childImageSharp.fluid} />
    </TestimonialImageWrapper>
  );
}

function Testimonial() {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      allTestimonialJson {
        nodes {
          name
          image {
            childImageSharp {
              fluid(maxWidth: 360, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialWrapper>
      <Anchor id="testimonial" />
      <ContentContainer alignItems="center">
        <SectionHeader>Testimonial</SectionHeader>
        <TestimonialImageContainer>
          {data.allTestimonialJson.nodes.map((node) => <TestimonialImage key={node.name} node={node} />)}
        </TestimonialImageContainer>
        <p>We do sure hope you stay!</p>
        <p>Pricila and Olive</p>
      </ContentContainer>
    </TestimonialWrapper>
  );
}

export default Testimonial;