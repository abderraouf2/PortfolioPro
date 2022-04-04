import styled from "styled-components";
import { Link } from 'react-scroll/modules';
import { css } from "styled-components";


export const HeaderContainer= styled.div`
height: 3%;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 3%;
padding-top: 10px;
position:fixed;
z-index:3;
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
padding: 25px;
${sharedProps}
font-family: 'Send Flowers', cursive;
`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const OptionLink= styled(Link)`
padding: 10px 15px;
cursor: pointer;
${sharedProps}
`
