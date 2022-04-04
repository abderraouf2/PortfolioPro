import styled from 'styled-components'

export const ProjectPage = styled.div`
`

export const ProjectsContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  @media screen and (max-width: 992px) {
   
  }
`;

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