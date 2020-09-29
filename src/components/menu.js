import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { css } from "linaria";
import { styled } from "linaria/react";
import Img from "gatsby-image";

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
  margin: 0 0 0 24px;
`;

const logoIcon = css`
  width: 48px;
 `;

const menu = css`
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  background-color: white;
`;

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
  }
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const menuItem = css`
  margin: 0 16px;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--color-fg);
  transition: color ease-out 0.25s;

  &:hover {
    color: var(--color-primary);
  }
`;

function Menu({ sticking }) {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
        }
      }

      logoFile: file(relativePath: { eq: "nexus-logo-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 96, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
            <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
          </SiteBranding>
        </Link>
        <MenuItemsContainer>
          <Link class={menuItem} to="/#about">About</Link>
          <Link class={menuItem} to="/#social">Socials</Link>
          <Link class={menuItem} to="/#teams">Teams</Link>
        </MenuItemsContainer>
      </MenuContainer>
    </div>
  );
}

export default Menu;