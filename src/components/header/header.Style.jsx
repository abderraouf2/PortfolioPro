import styled from "styled-components";
import { Link } from 'react-scroll/modules';
import { css } from "styled-components";


export const HeaderContainer= styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 3%;
top:0;
position:fixed;
z-index:3;
background-color:none;
box-shadow:5px 5px 5px #D1D9E6;
opacity:100%;
`
const sharedProps = css`
color: black;
text-decoration:none;
font-family: 'Libre Baskerville', serif;
font-weight:700;
&:hover{
  color: #02aab0;
  border: none;
}
`

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 20px;
${sharedProps};
font-family: 'Send Flowers', cursive;
cursor:pointer;
`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
padding:10px;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const OptionLink= styled(Link)`
padding: 10px 15px;
cursor: pointer;
${sharedProps}
`
