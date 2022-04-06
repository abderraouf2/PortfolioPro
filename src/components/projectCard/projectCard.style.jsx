import styled from 'styled-components'


export const ProjectTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 0px 10px;
`;

export const ProjectCard = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: row;
  margin:3vw;
  box-shadow: 5px 5px 5px  #02aab0;
  overflow:hidden;
  @media screen and (max-width: 992px){
    width:80vw;
    height:28vh
  }
`

export const Image= styled.img`
  width: 40%;
  height:auto;
  overflow:hidden;
  &:hover{
    transform:scale(1.1);
    transition: transform 3s cubic-bezier(0.25,0.45,0.45,0.95);
  }
`