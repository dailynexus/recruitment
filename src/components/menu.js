import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const MenuContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SiteBranding = styled.div`
  display: none;
`

const brandingLink = css`
  text-decoration: none;
  color: var(--color-fg);
`;

const SiteTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 0 24px;
  color: white;
  transition: color ease-out 0.25s;

  &:hover {
    color: var(--color-accent);
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Hide = styled.span`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const logoIcon = css`
  width: 48px;
 `;

const menu = css`
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  background-color: var(--color-primary);
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    visibility: hidden;
  }
`;

const menuToggle = css`
  display: none;
  font-size: 2rem;
`;

const menuItem = css`
  margin: 0 16px;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  transition: color ease-out 0.25s;

  &:hover {
    color: var(--color-accent);
  }
`;

const CloseButton = styled.div`
  display: none;
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-size: 3rem;
`;

const expanded = css``;

const menuSticky = css`
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);

  ${MenuContainer} {
    justify-content: space-between;
  }

  ${SiteBranding} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    ${MenuItemsContainer} {
      visibility: hidden;
      transform: translate(100%);
      height: 100%;
      padding: 0 50px;
      min-width: 50vw;
      background-color: white;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      transition: transform ease-out 0.3s;

      .${menuItem} {
        font-size: 3rem;
      }
    }

    ${MenuItemsContainer}.${expanded} {
      visibility: visible;
      transform: translate(0%);
      box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.3);
    }

    .${menuToggle} {
      display: block;
    }

    ${CloseButton} {
      display: block;
    }
  }
`;

function Menu({ sticking }) {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      logoFile: file(relativePath: { eq: "nexus-logo-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 96, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  let [menuExpanded, setMenuExpanded] = useState(false);

  let menuClasses = [menu];
  if (sticking) {
    menuClasses.push(menuSticky);
  }

  return (
    <div className={menuClasses.join(" ")}>
      <MenuContainer>
        <Link className={brandingLink} to="/">
          <SiteBranding>
            <Img className={logoIcon} fluid={data.logoFile.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} />
            <SiteTitle>
              <Hide>Daily Nexus </Hide>
              Recruitment
            </SiteTitle>
          </SiteBranding>
        </Link>
        <FontAwesomeIcon className={menuToggle} icon={faBars}
          onClick={() => setMenuExpanded(!menuExpanded)} />
        <MenuItemsContainer className={menuExpanded ? expanded : ""}>
          {(menuExpanded) &&
            <CloseButton onClick={() => setMenuExpanded(!menuExpanded)}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          }
          <Link class={menuItem} to="/#about">About</Link>
          <Link class={menuItem} to="/#social">Socials</Link>
          <Link class={menuItem} to="/#teams">Teams</Link>
          <Link class={menuItem} to="/#faq">FAQ</Link>
          <Link class={menuItem} to="/#contact">Contact</Link>
        </MenuItemsContainer>
      </MenuContainer>
    </div>
  );
}

export default Menu;