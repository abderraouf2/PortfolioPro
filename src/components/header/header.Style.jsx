import styled from "styled-components";
import { Link } from 'react-scroll/modules';
import { css } from "styled-components";


export const HeaderContainer= styled.div`
width: 100%;
font-size: 1.5rem;
display: flex;
justify-content: space-between;
margin-bottom: 3%;
padding-right:40px;
top:0;
position:fixed;
z-index:3;
background-color:none;
opacity:100%;
left:0

`
const sharedProps = css`
color: black;
text-decoration:none;
font-family: 'Libre Baskerville', serif;
font-weight:700;
&:hover{
  color:#464c47;
  border: none;
}
@media screen and (max-width: 992px) {
  font-size:1rem; 
  font-weight:400;
}
`

export const LogoContainer = styled(Link)`
height: 100%;
width: fit-content;
padding:2%;
${sharedProps};
cursor:pointer;
@media screen and (max-width: 992px) {
  z-index:3;
}
`

export const OptionsContainer = styled.div`
width: 30%;
height: 100%;
padding:10px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 992px) {
  opacity:1;
  height:100vh;
  top:0;
  flex-direction:column;
  align-items: flex-start;
  justify-content: center;
  background-color:#464c47;
  width:100%;
  animation: BigText_chars-in__e_wCk 1.25s varcubic-bezier(0.62,0.05,0.01,0.99);
}

html { forwards;
}
`

export const OptionLink= styled(Link)`
padding: 10px 15px;
cursor: pointer;
${sharedProps};
@media screen and (max-width: 992px) {
  color:white;
  font-size:3.5rem;
  lign-height:1.25;
  text-transform: uppercase;
  font-weight:600;
  padding:0
}
`
