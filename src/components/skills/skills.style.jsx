import styled from 'styled-components';


export const SkillComponent= styled.div`
width:100%;

`

export const Title = styled.h1`
    color:black;
    font-weight:450;
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
  width: 100%;
  display: flex;
  justify-content:flex-start;
  flex-direction:row;
  opacity:100%;
  
`

export const Icons1 = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  margin:4%;
`
