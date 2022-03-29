import React from 'react'
import styled from 'styled-components';
import { Button } from '../Styles/Styled-Components/Button';
import { Container } from '../Styles/Styled-Components/Container'
import { Flex } from '../Styles/Styled-Components/Flex';
import myimage from "../../Assets/illustration-mockups.svg"



const StyledHeader = styled.div`
background-color: ${({ theme }) => theme.colors.header};



`

const HeaderDiv = styled.div`
  
`

const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media screen and (max-width: ${({ theme }) => theme.mobile}){

text-align: center;
margin: 40px 0;

}

`

function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderDiv>
            <Flex>
              <div>
                <h1>Build The Community Your Fans Will Love</h1>

                <p>
                  Huddle re-imagines the way we build communities. You have a voice,
                  but so does your audience. Create connections with your users as
                  you engage in genuine discussion.
                </p>

                <Button backgroundColor='#ff0099' color='#fff'>
                  Get Started For Free
                </Button>
              </div>

              <Image src={myimage} alt='image' />
            </Flex>
          </HeaderDiv>
        </Container>


      </StyledHeader>

    </>
  )
}

export default Header