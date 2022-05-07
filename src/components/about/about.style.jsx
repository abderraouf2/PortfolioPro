import styled from 'styled-components';


export const Trapez = styled.div`
    width:100%;
    height: 90vh;
    background-color: #0F5257;
    clip-path: polygon(0% 0%,0 85%, 100% 60%, 100% 0);
    margin: 0;
    @media screen and (max-width: 992px){
      clip-path:none;
      height:70vh
    }
`

export const Title = styled.h1`
    color:white;
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
`

export const Image = styled.img`
    width: 25vw;
    height: 30vh;
`
export const Discription = styled.div`
    width: 50vw;
    color: white;
`