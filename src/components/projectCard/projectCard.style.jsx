import styled from 'styled-components'


export const ProjectTitle = styled.a`
  font-size: 52px;
  margin: 0 auto 0px 10px;
  font-weight:500;
  @media screen and (max-width: 992px) {
    width:100%;
    height:100%;
    font-size:2rem;
  }
`;

export const Details = styled.div`
  width:60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left:2%;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin-top:2vh;
  font-family: "Zilla Slab", serif;
  @media screen and (max-width: 992px) {
    width:100%;
    height:55%;
    font-size:0.8rem
  }
`

export const Projectcard = styled.div`
  width: 95%;
  height: 80vh;
  background-color:none;
  margin:5% 2% ;
  margin-right:7%;
  // box-shadow:5px 5px 5px #D1D9E6;
  display: flex;
  align-items:flex-start;
  flex-direction: row;
  @media screen and (max-width: 992px){
    margin:5% 0;
    width:99%;
    height:70vh;
    display: flex;
    flex-direction: column;
    
  }
`

export const Image= styled.img`
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 0.375rem /* 6px */;
  object-fit: cover;
  object-position: center;
  display: block;
  width:100%;
  max-width: 100%;
  height:100%;
  
  padding:0;
  // &:hover{
  //   transform:scale(1.1);
  //   transition: transform 3s cubic-bezier(0.25,0.45,0.45,0.95);
  // }
  @media screen and (max-width: 992px){
    margin:1%;
    opacity:.85;
    width:98%;
  }
`
export const ImageContainer = styled.a`
  height:80vh;
  width:50%;
  display:flex;
  overflow:hidden;
  align-items:flex-start;
  justify-content:flex-start;
  &:hover{
    opacity:0.9;
    cursor:none
  };
  
  @media screen and (max-width: 992px) {
    width:100%;
    height:100%;
    position: relative;
    margin-top:2vh;
  }
`

export const CustomButtonContainer= styled.a`
  text-decoration:none;
  width: 20vw;
  height: 50px;
  margin-top:30px;
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
  background-color: #89715b;
  color: white;
  border: none;
  transition:.5s;
  &:hover {
    background-color:#464c47;
    
  }
  @media screen and (max-width: 992px) {
    font-size:0.5rem;
    margin-top:10px;
  }
`