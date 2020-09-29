import React from "react";
import { css } from "linaria";
import { styled } from "linaria/react";

const Link = styled.a`
  flex: 0;
  text-decoration: none;
`;

const Wrapper = styled.div`
  padding: 1.25rem 3rem;
  display: flex;
  border-radius: 20px;
  background-color: var(--color-accent);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.4s ease-out;

  &:hover {
    background-color: var(--color-accent-dark);
  }
`;

const Text = styled.div`
  font-size: 3rem;
  line-height: 4rem;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: white;
`;

const textSmall = css`
  font-size: 2rem;
  line-height: 3rem;
`;

function Button({ to, text, size }) {
  return (
    <Link target="_blank" href={to}>
      <Wrapper>
        <Text className={(size === "small") ? textSmall: ""}>
          {text}
        </Text>
      </Wrapper>
    </Link>
  );
}

Button.defaultProps = {
  size: "large"
}

export default Button;
