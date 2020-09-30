import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { styled } from "linaria/react";

import ContentContainer from "./content-container";
import SectionHeader from "./styled/section-header";
import Anchor from "./styled/anchor";
import Img from "gatsby-image";
import { css } from "linaria";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 48px 0;
  background-color: var(--color-bg);
`;

const ContactCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactCardWrapper = styled.div`
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

const ContactInfo = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const Name = styled.div`
  font-size: 1.5rem;
`;

const Email = styled.a`
  color: var(--color-primary-alt);
  text-decoration: none;
`;

function ContactCard({ node }) {
  return (
    <ContactCardWrapper>
      <Img className={photo} fluid={node.photo.childImageSharp.fluid} />
      <ContactInfo>
        <Name>{node.name}</Name>
        <div>{node.title}</div>
        <Email target="_blank" href={"mailto:" + node.email}>{node.email}</Email>
      </ContactInfo>
    </ContactCardWrapper>
  );
}

function Contact() {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allContactJson {
        nodes {
          name
          title
          email
          photo {
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
    <ContactWrapper>
      <Anchor id="contact" />
      <ContentContainer alignItems="center">
        <SectionHeader>Contact Us</SectionHeader>
        <ContactCardContainer>
          {data.allContactJson.nodes.map((node) => <ContactCard node={node} />)}
        </ContactCardContainer>
      </ContentContainer>
    </ContactWrapper>
  );
}

export default Contact;