import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { css } from "linaria";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./footer";

export const globals = css`
  :global() {
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background-color: #fffaf7;
    }

    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  }
`;

const themePrimary = css`
  --color-fg: #232642;
  --color-bg: #fffaf7;
  --color-primary: #393e75;
  --color-primary-alt: #707AE8;
  --color-accent: #dc7a91;
  --color-accent-dark: #8c4c5b;

  color: var(--color-fg);
  font-family: "PT Sans", "Helvetica", sans-serif;

  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", serif;
    font-weight: normal;
  }
`;
/*
// Push content down by height+bottom margin of menu once menu is removed from normal flow
// to avoid jump in position
const stickyMenu = css`
  padding-top: 103px;
`;
*/

function Layout({ sticking, children }) {
  useEffect(() => {
    AOS.init({
      disable: "mobile"
    });
  }, []);

  let classes = [themePrimary];
  /*
  if (sticking) {
    classes.push(stickyMenu);
  }*/

  return (
    <div className={classes.join(" ")}>
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  sticking: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
