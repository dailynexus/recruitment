import React from "react"
import { css } from "linaria";
import { styled } from "linaria/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import Anchor from "../components/styled/anchor";
import ContentContainer from "../components/content-container";
import SectionHeader from "./styled/section-header";

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  color: white;
  background-color: var(--color-primary);
`;

const SocialMediaContainer = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SocialMediaLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color ease-out 0.4s;

  &:hover {
    color: var(--color-accent);
  }
`;

const SocialMediaIndividualGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const socialIcon = css`
  font-size: 8rem;
`;

const AccountName = styled.span`
  font-size: 1.5rem;
`;

function SocialMediaIndividual({ icon, to, children }) {
  return (
    <SocialMediaLink target="_blank" href={to}>
      <SocialMediaIndividualGroup>
        <FontAwesomeIcon icon={icon} className={socialIcon} />
        <AccountName>{children}</AccountName>
      </SocialMediaIndividualGroup>
    </SocialMediaLink>
  );
}

function SocialMedia() {
  return (
    <SocialMediaWrapper>
      <Anchor id="social" />
      <ContentContainer alignItems="center">
        <SectionHeader>Social Media</SectionHeader>
        <SocialMediaContainer>
          <SocialMediaIndividual icon={faTwitter} to="https://twitter.com/dailynexus">
            @dailynexus
          </SocialMediaIndividual>
          <SocialMediaIndividual icon={faInstagram} to="https://www.instagram.com/dailynexus">
            @dailynexus
          </SocialMediaIndividual>
          <SocialMediaIndividual icon={faFacebook} to="https://www.facebook.com/dailynexus">
            Daily Nexus
          </SocialMediaIndividual>
        </SocialMediaContainer>
      </ContentContainer>
    </SocialMediaWrapper>
  );
}

export default SocialMedia;
