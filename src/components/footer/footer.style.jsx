import styled from 'styled-components';

export const Footer = styled.footer`
  width:100%;
  height: 93vh;
  background-color: #0F5257;
  clip-path: polygon(0% 40%,0% 100%, 100% 100%, 100% 15%);
  display flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding-top:30px;
  @media screen and (max-width: 700px){
    clip-path:none
  }
`


export const Container = styled.div`
    display:flex;
    flex-direction: row
`

export const A = styled.a`
  color:black;
  text-decoration:none;
  overflow:hidden;
  &:hover{
    transform: scale(1.05);
    transition:transform 5s  cubic-bezier(0.25,0.45,0.45,0.95);
  }
`