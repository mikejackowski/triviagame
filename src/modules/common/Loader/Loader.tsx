import React from 'react';
import * as Styled from './Loader.styled';

const Loader = () => {
  return (
    <Styled.LoaderWrapper>
      <Styled.LoaderBubble />
      <Styled.LoaderBubble />
      <Styled.LoaderBubble />
      <Styled.LoaderBubble />
    </Styled.LoaderWrapper>
  );
};

export default Loader;
