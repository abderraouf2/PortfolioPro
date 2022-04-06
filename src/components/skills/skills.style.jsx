import styled from 'styled-components';
import FullHeight from 'react-full-height'

export const SkillPage = styled(FullHeight)`
  
`

export const SkillComponent= styled.div`
width:100%;
display:flex;
justify-content:center;

`

export const Title = styled.h1`
    color:black;
    font-weight:450;
    padding: 2% 1% 0% 6%;
    font-size: 3rem;
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

export const SkillCard = styled.div`
  width: 70%;
  height: 60vh;
  display: flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:column;
  box-shadow: 18px 18px 30px #D1D9E6;
  opacity:100%;
  overflow:hidden;
  
`

export const Icons1 = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin:4%;
`
