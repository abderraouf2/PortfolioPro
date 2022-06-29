
import styled from 'styled-components'

export const Image = styled.img`
  width: 3vw;
  @media screen and (max-width: 992px) {
    width: 70%;
  }
`

export const Container= styled.div`
  width:10vw;
  margin:3%;
  height: auto;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 992px) {
    width: 50%;
  }
`