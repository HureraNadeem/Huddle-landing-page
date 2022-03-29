import styled from "styled-components";

export const Container = styled.div`
    padding: 0 50px;

    @media screen and (max-width: ${({theme})=>theme.mobile}) {
        padding: 0 25px;
        
    }
`