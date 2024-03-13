import styled from "styled-components";

export const Container = styled.section`
    justify-content: space-between;
    margin: 1rem 0 1rem;
    align-items: center;
    position: relative;
    display: flex;
    height: 15vh;
    width: 25%;
    
    &:after{
       background-color: ${({ theme }) => theme.colors.details};
       transform: translateY(-50%);
        position: absolute;
        content: "";
        height: 2px;
        width: 100%;
        z-index: 0;
        top: 50%;
    }
`

export const ProgressStep = styled.div`
  background-color: ${({ theme }) => theme.colors.details};
  border-radius: 50px;
  height: 35px;
  width: 35px;
  z-index: 1;

  &:after {
    color: ${({ theme }) => theme.colors.details};
    /* justify-content: space-between; */
    content: attr(data-title);
    top: calc(70% + 0.5rem);
    position: absolute;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    opacity: 0.7;
    width: 100%;
  }
`  

export const stepActive = styled.div `
 background-color: ${({ theme }) => theme.colors.primary};
` 