import React from 'react'
import { StyledCard } from '../Styles/Styled-Components/CardStyled'

export default function Card({ id, data }) {
    return (
        <>
            <StyledCard layout={id % 2 == 0 && "row-reverse"}>
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>

                <div>
                    <img src={require(`../../Assets/${data.image}`)} alt='' />
                </div>



            </StyledCard >

        </>
    )
}
