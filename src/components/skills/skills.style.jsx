import styled from 'styled-components';


export const SkillComponent= styled.div`

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
  justify-content:center;
  flex-direction:row;
  opacity:100%;
  @media screen and (max-width: 992px){
    width:90%;
    left:0
  }
`

export const Icons1 = styled.div`
  width:70%;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:20px;
  @media screen and (max-width: 992px){
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
    width:100%;
    left:0
  }
`
