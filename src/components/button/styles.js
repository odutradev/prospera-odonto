import styled from 'styled-components'

export const ButtonContainer = styled.button`
box-sizing: border-box;
  background: ${({theme, secondary}) => secondary ? 'transparent' : theme.colors.gradient};
  color: ${({theme}) => theme.colors.text};
  padding: ${({height}) => height}px 0;
  width: ${({width}) => width}vw;
  min-width: 200px;
  border: none;
  text-transform: uppercase;
  box-sizing: border-box;
  transition: ease .3s;
  letter-spacing: 2px;
  position: relative;
  border-radius: 2px;
  font-weight: 800;
  overflow: hidden;
  cursor: pointer;

&:hover {
opacity: 85%;
}

`