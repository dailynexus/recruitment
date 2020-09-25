import React from "react"
import { css } from "linaria";
import { styled } from "linaria/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import ContentContainer from "../components/content-container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  color: white;
  background-color: var(--color-primary);
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 70px;
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
    <Wrapper>
      <ContentContainer alignItems="center">
        <Header>Social Media</Header>
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
    </Wrapper>
  );
}

export default SocialMedia;
