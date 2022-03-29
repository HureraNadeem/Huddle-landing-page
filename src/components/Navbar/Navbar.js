import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/Styled-Components/Button';
import { Container } from '../Styles/Styled-Components/Container';

import LogoImg from '../../Assets/logo.svg';


const StyledNavbar = styled.div`
background-color: ${({ theme }) => theme.colors.navbar};
    
`
const Nav = styled.nav`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.mobile}){

    flex-direction: column;
      
  }
`

const Logo = styled.img`
    @media screen and (max-width: ${({ theme }) => theme.mobile}){

        margin-bottom: 30px;
  
}


`
export default function Navbar() {
    return (
        <>
            <StyledNavbar>
                <Container>
                    <Nav>
                        <Logo src={LogoImg} />
                        <Button color=''>Try it free</Button>
                    </Nav>
                </Container>
            </StyledNavbar>
        </>
    )
}
