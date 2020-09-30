import React from "react";
import { styled } from 'linaria/react';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1022px;
  padding: 0 32px; 
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
`;

function ContentContainer({ alignItems, className, children }) {
  return (
    <Wrapper className={className} alignItems={alignItems}>
      {children}
    </Wrapper>
  );
}

export default ContentContainer;
