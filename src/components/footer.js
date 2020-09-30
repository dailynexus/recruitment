import React from "react";
import { styled } from "linaria/react";

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--color-fg);
  padding: 20px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} The Daily Nexus
    </FooterWrapper>
  );
}

export default Footer;