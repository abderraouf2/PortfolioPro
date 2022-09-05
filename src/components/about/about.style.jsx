import styled from 'styled-components';


export const Trapez = styled.div`
    width:100%;
    background-color: #141414;
    
    left:0;
`

export const Title = styled.h3`
    font-size: 48px;
    font-weight: 700;
    color: #89715b;
    text-transform: uppercase;
    line-height: 1.2;
    animation: 1s ease-out 0s 1 slideInFromleft;
    @keyframes slideInFromleft{
      0% {
        transform: translate(-5%);
      }
      100% {
        transform: translateX(0);
      }
    }
    @media screen and (max-width: 992px) {
      font-size:2.5rem;
      font-weight: 700;
      margin-bottom: 5%;
      margin-top:0;
    }
`
export const Container = styled.div`
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    background-color: #090909;
    width:93%;
    padding: 0 3.5%;
    overflow-x: hidden;
    @media screen and (max-width: 992px){
      width:100%;
      flex-direction:column;
      padding-left:2%
    }
`

export const Image = styled.img`
    width: 52%;
    height: 100%;
    margin-left:3%;
    @media only screen and (max-width: 992px){
      width:90%;
      margin: 40px 5% 40px 2%;
      height:50vh
    }
`
export const Description = styled.div`
    width: 40%;
    color: white;
    display:flex;
    flex-direction:column;
    visibility: visible;
    font-family: "Zilla Slab", serif;
    @media screen and (max-width: 992px){
      width:95%;
      margin: 0 2.5% 40px 2.5%;
      font-weight:100;
    }
`
export const Text = styled.h3`
font-family: PP Neue Montreal,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight: 500;
font-size: 20px;
line-height: 1.6;
margin-top: 20px;
text-transform: lowercase;
@media screen and (max-width: 992px){
  width:90%;
}
`
export const Paragraph = styled.p`
    font-size:2rem;
    @media screen and (max-width: 992px){
      font-size:20px;
      font-wheight:500
    }
`