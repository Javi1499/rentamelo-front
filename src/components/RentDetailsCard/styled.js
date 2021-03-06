import styled from "styled-components";

export const RentDetails = styled.div`
display: flex;
flex-wrap: wrap;
width: 300px;
height: 200px;
background-color:${props => props.idStatus !== 7 ? `${props.idStatus === 5 ? "#4BDB57C7" : "#4BA6DBB9"}` : "#A19F9FA6"} ;
border-radius: 0px 10px 10px 0px;
padding: 8px;
box-sizing: border-box;
`

export const Section = styled.div`
width: 100%;
height: fit-content;
font-family: "Roboto";
`
export const Span = styled.span`
font-family: "Roboto-Medium";
`
export const Date = styled.p`
font-family: "Roboto";
margin: 0;
`
export const ButtonContainer = styled.div`
display: flex;
width: 100%;
height: 32px;
justify-content: center;

>button{
    width: 70%;
    background-color: ${props => props.isInProgress ? "#108CFF" : "#FA4B4B"};
}
`

