import styled from 'styled-components'

export const Container = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;
display: flex;
width: auto;

& > div {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

`

export const Users = styled.div`
justify-content: center;
box-sizing: border-box;
flex-direction: column;
align-items: center;
background: #191919;
padding: 30px;
display: flex;
height: 75%;
width: 30%;
gap: 25px;

& > div {
  border: 1px solid black;
  height: 100%;
  width: 100%;
}

& > p {
  width: 100%;
}
`
export const Form = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
background: #191919;
display: flex;
height: 75%;
width: 40%;
gap: 25px;
}

& > div {
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 25px;
  
}
& > div > label {
  color: ${({theme}) => theme.colors.secondaryText};
  width: 100%;
}

`

export const Input = styled.input`
height: 50px;
width: 350px;
border: none;
outline: none;
background: #272626;
padding: 5px 10px;
color: ${({theme}) => theme.colors.secondaryText};
`

export const Logo = styled.div`
background-image: url("../../../public/images/BonfireLogo.svg");
background-position: center;
background-repeat: no-repeat;
background-color: #131313;
border-radius: 50%;
width: 100px;
height: 100px;
`