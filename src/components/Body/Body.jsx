import React from 'react'
import content from '../../Assets/content'
import Card from './Card'
import { Container } from '../Styles/Styled-Components/Container'

export default function Body() {
    return (
        <>
            <Container>

                {content.map((data, i) => (
                    <Card key={i} data={data} id={i} />
                ))}
            </Container>
        </>
    )
}
