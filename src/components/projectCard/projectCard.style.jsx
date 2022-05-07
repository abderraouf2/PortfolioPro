import styled from 'styled-components'


export const ProjectTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 0px 10px;
  @media screen and (max-width: 992px) {
    width:100%;
    height:100%;
    font-size:2rem
  }
`;

export const Details = styled.div`
  width:60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left:2%;
  
  @media screen and (max-width: 992px) {
    width:100%;
    height:55%;
    font-size:0.8rem
  }
`

export const ProjectCard = styled.div`
  width: 95%;
  height: 30%;
  background-color:none;
  margin:2%;
  box-shadow:5px 5px 5px #D1D9E6;
  display: flex;
  align-items:center;
  flex-direction: row;
  overflow:hidden;
  padding:0;
  @media screen and (max-width: 992px){
    margin:2%;
    width:80vw;
    height:70vh;
    display: flex;
    flex-direction: column;
  }
`

export const Image= styled.img`
  width: 50%;
  height:10%;
  overflow:hidden;
  padding:0;
  &:hover{
    transform:scale(1.1);
    transition: transform 3s cubic-bezier(0.25,0.45,0.45,0.95);
  }
  @media screen and (max-width: 992px){
    margin:2%;
    width:70%;
    height:auto;
  }
`
export const ImageContainer = styled.div`
  width:75%;
  // height:90vh;
  // background-color: black;
  margin-right:2%;
  border:2px solid black;
  display:flex;
  align-items:flex-start;
  justify-content:flex-start;
  // clip-path: polygon(40% 0%,0 100%, 100% 100%, 100% 0); 
  // &:hover{
  //   opacity:0.6
  // }
  @media screen and (max-width: 992px) {
    width:70%;
    height:100%;
    
  }
`

export const CustomButtonContainer= styled.a`
  text-decoration:none;
  width: 20vw;
  height: 50px;
  margin-top:50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center; 
  background-color: black;
  color: white;
  border: none;
  transition:.5s;
  &:hover {
    background-color: #0F5257;
    border: 1px solid black;
  }
  @media screen and (max-width: 992px) {
    
  }
`