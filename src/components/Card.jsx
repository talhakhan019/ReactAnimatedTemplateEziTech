import React from 'react'
import styled from '@emotion/styled'
const Card = ({data}) => {
  return (
    <Container>
        <img src={data.image} alt="" />
        <h2>{data.title}</h2>
        <span>{data.description}</span>
    </Container>
  )
}

export default Card
const Container = styled.div`
    padding: 3rem 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    border: 1px solid #8585854c;
    width: 22%;
    height: 400px;
    cursor: pointer;
    transition: 0.4s all ease;
    &:hover{
        transform: translateY(-6px);
    }
    img{
        width: 90px;
    }
    h2{
        font-weight: 100;
        font-size: 28px;
        color: #2c2c2c;
    }
    span{
        color: #5c5c5c;
        font-size: 14px;
    }
`