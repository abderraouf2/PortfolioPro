import styled from 'styled-components';
import FullHeight from 'react-full-height'

export const TopContainer = styled(FullHeight)`
padding : 1% 0;
background-color: #2222;
font-family: 'Montserrat', sans-serif;
overflow-y: hidden;
margin-bottom:0;
`

export const HeadContainer = styled.h1`
    height: 80%;
    margin-left : 5%;
    font-family: 'Libre Baskerville', serif;
    font-size: 3.6rem;
    font-weight: 700;
    text-align: left;   
    display: block;
    padding-top:12%;
    animation: 1s ease-out 0s 1 slideInFromleft;
    @keyframes slideInFromleft{
      0% {
        transform: translate(-5%);
      }
      100% {
        transform: translateX(0);
      }
    }
`
export const Span = styled.span`
    background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}
`

