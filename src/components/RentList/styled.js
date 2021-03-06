import styled from "styled-components";
export const Wrapper = styled.div`
display: flex;
justify-content: center;

flex-wrap: wrap;
`
export const RentList = styled.div`
display: flex;
width: 100%;
height: fit-content;
flex-wrap: wrap;
justify-content: center;
`

export const Rent = styled.div`
width:auto;
height: fit-content;
margin: 8px 0;
`

export const Title = styled.h2`
font-size: 32px;
font-family: "Roboto-Medium";
width: 950px;
text-align: center;
color: #FFFFFF;
border-radius: 4px;
background-color: ${props => props.viewAs ? "#0C6600" : "#003466"};
`