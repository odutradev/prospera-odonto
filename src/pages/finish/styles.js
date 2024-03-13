

import styled from 'styled-components'

export const Container = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;
display: flex;
width: auto;
`

export const Box = styled.div`
justify-content: center;
box-sizing: border-box;
flex-direction: column;
align-items: center;
background: #191919;
padding: 40px 50px;
display: flex;
height: 75%;
width: 60%;
gap: 25px;

& > h1 {
  font-size: 2rem;
  color: #0499C8;
}
`
export const Users = styled.div`

border: 1px solid black;
padding: 10px;
gap: 10px;
display: flex;
height: 70%;
width: 100%;
flex-direction: column;

& > p {
  width: 100%;
  
}
`