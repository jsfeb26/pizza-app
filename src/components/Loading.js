import React from 'react';
import styled from 'styled-components';

import Loading from '../static/loading.gif';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,.9);
`;

export default function() {
  return (
    <Container>
      <img src={Loading} alt="Loading" />
    </Container>
  );
}
