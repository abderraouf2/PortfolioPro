import styled from 'styled-components';
import FullHeight from 'react-full-height'

export const SkillPage = styled(FullHeight)`
  display:flex;
  flex-direction: row;
`

export const SkillComponent= styled.div`
display:flex;
flex-direction: row;
`

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 0px 10px;
`;

export const SkillCard = styled.div`
  width: 35%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  margin:5vw;
  box-shadow: 5px 5px 5px  #02aab0;
  overflow:hidden;
  &:hover{
    ProjectTitle{
      color:red;
    }
  }
`