import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components";


export const HeaderContainer= styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`
const sharedProps = css`
color: black;
text-decoration:none;
&:hover{
  color: #777;
  border: none;
}
`

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
${sharedProps}
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
