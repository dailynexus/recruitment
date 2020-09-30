import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Anchor from "../components/styled/anchor";
import ContentContainer from "../components/content-container";
import SectionHeader from "../components/styled/section-header";

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 48px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../images/nexus-art-cropped.png);
  color: var(--color-fg);

  @media only screen and (max-width: 640px) {
    padding: 48px 20px;
  }
`;

const faqContainer = css`
  padding: 30px 60px;
  background-color: white;
  border-radius: 20px;

  @media only screen and (max-width: 640px) {
    padding: 30px;
  }
`;

const FAQBlockWrapper = styled.div`
  width: 100%;
  font-size: 1.25rem;
  margin-bottom: 30px;
  border: 1px solid var(--color-primary);
  border-radius: 10px 10px 0 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FAQHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 10px 10px 0 0;
`;

const iconFlipped = css`
  transform: rotate(-180deg);
  transition: transform ease 0.25s;
`;

const iconDefault = css`
  transform: rotate(0deg);
  transition: transform ease 0.25s;
`;

const FAQAnswer = styled.div`
  padding: 20px;
  border-top: 1px solid var(--color-fg);
`;

function FAQBlock({node}) {
  const {question, answer} = node;
  let [expanded, setExpanded] = useState(false);

  return (
    <FAQBlockWrapper>
      <a onClick={() => setExpanded(!expanded)}>
        <FAQHeader>
          <span><strong>Q:</strong> {question}</span>
          <FontAwesomeIcon className={expanded ? iconFlipped : iconDefault} icon={faCaretDown} />
        </FAQHeader>
      </a>
      {expanded && <FAQAnswer><strong>A:</strong> {answer}</FAQAnswer>}
    </FAQBlockWrapper>
  );
}

function FAQ() {
  const data = useStaticQuery(graphql`
    query FAQQuery {
      allFaqJson {
        nodes {
          question 
          answer 
        }
      }
    }
  `)

  return (
    <FAQWrapper>
      <Anchor id="faq" />
      <ContentContainer alignItems="center" className={faqContainer}>
        <SectionHeader>FAQ</SectionHeader>
        {data.allFaqJson.nodes.map((node) => <FAQBlock node={node} />)}
      </ContentContainer>
    </FAQWrapper>
  );
}

export default FAQ;