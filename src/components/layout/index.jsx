import React, { useState, useEffect } from 'react';
import Background from '../background';
import { Container } from './styles.js';

const Layout = ({ children, onLayout }) => {
  const [backgroundPadding, setBackgroundPadding] = useState(false);
  const layout = { backgroundPadding, setBackgroundPadding };

  useEffect(() => {
    if (onLayout) {
      onLayout(layout)
    };
  },[backgroundPadding, setBackgroundPadding] )
  return (
    <Container>
      <Background padding={backgroundPadding}>
        {children}
      </Background>
    </Container>
  );
};

export default Layout;
