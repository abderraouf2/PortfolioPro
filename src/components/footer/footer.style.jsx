import styled from 'styled-components';

export const Footer1 = styled.footer`
  margin-top:5vh;
  height:90vh;
  padding-top:10%;
  overflow:hidden;
  @media screen and (max-width: 992px) {
   overflow-x:hidden
  }
`

export const Email = styled.h1`
  width:93%;
  height:30vh;
  margin:7% 5%;
  @media screen and (max-width: 992px){
    margin:30% 5%;
  }

`


export const A = styled.a`
  color:black;
  text-decoration:none;
  font-size:2rem;
  margin:2% 2%;
  &:hover{
    transform: scale(1.05);
    transition:transform 5s  cubic-bezier(0.25,0.45,0.45,0.95);
  }
  @media screen and (max-width: 992px) {
    font-size:20px;
    margin:5%;
    text-decoration:underline;
  }
`

export const Contact = styled.div`
  display:flex; 
  justify-content:center;
  margin-bottom:5%;
  @media screen and (max-width: 992px) {
    justify-content:flex-start;
    margin
  }
`