import styled from 'styled-components';
import FullHeight from 'react-full-height'

export const TopContainer = styled(FullHeight)`
padding : 1% 0;
background-color: #e1dfdd;;
font-family: 'Montserrat', sans-serif;
overflow-y: hidden;
margin-bottom:0;
display:flex;
flex-direction:row;
@media screen and (max-width: 992px) {
  display:flex;
  flex-direction:column;
}
`

export const Div = styled.div`
  width:40%;
  height:100vh;
  
  @media screen and (max-width: 992px) {
    width:100%;
    height:55%;
  }
`

export const HeadContainer = styled.h1`
    height: 80%;
    width:60%;
    margin-left : 5%;
    font-family: 'Libre Baskerville', serif;
    font-size: 3.6rem;
    font-weight: 700;
    text-align: left;   
    display: block;
    padding-top:12%;
    @media screen and (max-width: 992px) {
      height:35%;
      width:100%;
      font-size:2rem;
      font-weight: 500;
      display: flex;
      align-items:center;
      justify-content:flex-end;
      margin-bottom:2%;
      flex-direction:column;
      margin-left:0;
    }
    `

export const Span = styled.span`
    background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}
`

