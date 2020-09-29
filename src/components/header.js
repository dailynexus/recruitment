import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";
import useScrollPosition from '@react-hook/window-scroll';

import ContentContainer from "../components/content-container";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 48px;
`;

const logoLink = css`
  text-decoration: none;
`;

const RecruitmentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const logo = css`
  width: 80vw;
  max-width: 720px;
`;

const RecruitmentLogoSubtext = styled.h2`
  margin: 0;
  font-size: 3rem;
  color: #000;
  text-transform: uppercase;
`;

const menu = css`
  width: 100%;
  padding: 24px;
  background-color: white;
`;

const menuSticky = css`
  position: fixed;
  top: 0;
`;

const MenuItemsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const menuItem = css`
  margin: 0 10px;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--color-fg);
  transition: color ease-out 0.25s;

  &:hover {
    color: var(--color-primary);
  }
`;

function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logoFile: file(relativePath: { eq: "nexus-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const scrollY = useScrollPosition(30);
  let menuClasses = [menu];
  if (scrollY > 216) {
    menuClasses.push(menuSticky);
  }

  return (
    <>
      <HeaderWrapper>
        <ContentContainer alignItems="center">
          <Link to="/" className={logoLink}>
            <RecruitmentLogo>
              <Img className={logo} fluid={data.logoFile.childImageSharp.fluid} />
              <RecruitmentLogoSubtext>Recruitment</RecruitmentLogoSubtext>
            </RecruitmentLogo>
          </Link>
        </ContentContainer>
      </HeaderWrapper>
      <div className={menuClasses.join(" ")}>
        <MenuItemsContainer>
          <Link class={menuItem} to="#about">About</Link>
          <Link class={menuItem} to="#social">Socials</Link>
          <Link class={menuItem} to="#teams">Teams</Link>
        </MenuItemsContainer>
      </div>
    </>
  );
}

export default Header;