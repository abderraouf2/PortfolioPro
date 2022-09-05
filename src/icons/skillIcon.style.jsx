
import styled from 'styled-components'

export const Image = styled.img`
  width: 50%;
  height:auto;
  margin-left:25%;
  @media screen and (max-width: 992px) {
    width: 60%;
    margin-left:20%;
  }
`

export const Container= styled.div`
  width:90%;
  height: 30vh;
  border:.5px solid white;
  box-shadow:  0px 0px 3px 2px #89715b;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  background-color:#242424;
  @media screen and (max-width: 992px) {
    width: 100%;
    height:20vh
  }
`