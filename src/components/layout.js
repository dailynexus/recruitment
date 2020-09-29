import React from "react";
import PropTypes from "prop-types";

import { css } from "linaria";

export const globals = css`
  :global() {
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
    }

    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  }
`;

const themePrimary = css`
  --color-fg: #3D4454;
  --color-primary: #4790FD;
  --color-accent: #D16B94;
  --color-accent-dark: #ad577a;

  color: var(--color-fg);
  font-family: "PT Sans", "Helvetica", sans-serif;

  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", serif;
    font-weight: normal;
  }
`;

// Push content down by height+bottom margin of menu once menu is removed from normal flow
// to avoid jump in position
const stickyMenu = css`
  padding-top: 103px;
`;

function Layout({ sticking, children }) {
  let classes = [themePrimary];
  if (sticking) {
    classes.push(stickyMenu);
  }

  return (
    <div className={classes.join(" ")}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  sticking: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
