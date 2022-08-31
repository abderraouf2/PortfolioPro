import styled from 'styled-components';


export const Trapez = styled.div`
    width:100%;
    height:fit-content;
    overflow:hidden;
    margin: 0;
`

export const Title = styled.h1`
    color:black;
    padding: 3% 6%;
    font-size: 3.6rem;
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
      font-weight: 500;
      
    }
`
export const Container = styled.div`
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    @media screen and (max-width: 992px){
      width:100%;
      flex-direction:column;
      padding-left:2%
    }
`

export const Image = styled.img`
    width: 25vw;
    height: 30vh;
`
export const Description = styled.div`
    width: 60vw;
    color: black;
    font-weight: 200;
    display:flex;
    flex-direction:column;
    @media screen and (max-width: 992px){
      width:100%;
      font-weight:100;
    }
`
export const Text = styled.h3`
font-family: PP Neue Montreal,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-size:30px;
font-weight: 500; 
text-transform: uppercase;
line-height: 1.25;
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