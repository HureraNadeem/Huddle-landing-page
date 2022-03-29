import React from 'react'
import styled from 'styled-components'
import { Container } from '../Styles/Styled-Components/Container'
import { Flex } from '../Styles/Styled-Components/Flex'
import SocialIcons from './SocialIcons'
import pic from "../../Assets/logo_white.svg"


const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-right: 20px;
  }

  ul li {
    margin-bottom: 40px;
  }

  p {
    text-align: center;
    font-size: 14px;
    margin-top: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}){
    ul > li {
    margin-bottom: 20px;
  }
  
}
  
`

const Logo = styled.img`
margin-bottom: 30px;

    @media screen and (max-width: ${({ theme }) => theme.mobile}){
        display: block;
        margin-left: auto;
        margin-right: auto;
  
}
`

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <Container>
                    <Logo src={pic} alt="" />
                    {/* <img src={require("../../Assets/logo_white.svg")} alt="" /> */}
                    <Flex>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </li>
                            <li>+1-543-123-4567</li>
                            <li>example@huddle.com</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                            <li>What We Do</li>
                            <li>FAQ</li>
                        </ul>

                        <ul>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <SocialIcons />
                    </Flex>
                    <p>&copy; All rights reserved by Huddle group of companies @2022</p>
                </Container>
            </StyledFooter>




        </>
    )
}
