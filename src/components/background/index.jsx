import React from 'react';
import { Background } from './styles';

const Container = ({ padding, children}) => {

return (
  <Background padding={padding}>
    {children}
  </Background>
)

}

export default Container;