import styled from 'styled-components';

export const Footer1 = styled.footer`

  height:90vh;
  background-color:#090909;
  overflow:hidden;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  @media screen and (max-width: 992px) {
    height:70vh;
    overflow-x:hidden;
    justify-content:flex-end;
    align-items:center;
  }
`

export const Email = styled.h1`
  font-family: "Zilla Slab", serif;
  width:93%;
  height:30vh;
  margin:7% 5% ;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 992px){
    margin:30% 5% ;
  }

`

export const A = styled.a`
  text-decoration:none;
  font-size:2rem;
  margin:2% 2%;
  &:hover{
    transform: scale(1.05);
    transition:transform 5s  cubic-bezier(0.25,0.45,0.45,0.95);
  }
  @media screen and (max-width: 992px) {
    font-size:20px;
    margin:5% 5% 0% 5% ;
    text-decoration:underline;
  }
`

export const Contact = styled.div`
  width:85%;
  display:flex; 
  justify-content:flex-end;
  margin-bottom:5%;
  @media screen and (max-width: 992px) {
    height:40vh;
    justify-content:center;
    align-items:flex-end;
    margin: 0;
    padding-bottom:20%;
  }
`