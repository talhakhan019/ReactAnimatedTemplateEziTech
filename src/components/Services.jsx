import React from 'react'
import styled from '@emotion/styled'
import Card from './Card'
const Services = () => {
    const data=[
        {
            image: './images/card1.png',
            title: 'Grow Your Business Today',
            description: 'In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate'
        },
        {
            image: './images/card2.png',
            title: 'Improve Seo Ranking',
            description: 'In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate'
        },
        {
            image: './images/card3.png',
            title: 'Mobile App Design',
            description: 'In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate'
        },
        {
            image: './images/card4.png',
            title: 'Secure Developing',
            description: 'In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate'
        }
    ]
  return (
    <Container>
        <p>Our Services</p>
        <h1>Special Features</h1>
        <div className="cards">
            {
                data.map((eachData, ind) => {
                    return(
                        <Card data={eachData}/>
                    )
                })
            }
        </div>
    </Container>
  )
}

export default Services
const Container = styled.div`
    width: 95%;
    margin: 10rem auto;
    p{
        background: transparent linear-gradient(97deg,#b981f9 0%,#b981f9 9%,#9f62f7 27%,#f13c0d 47%,#f15143 63%,#eda800 83%,#f0aa0f 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 18px;
        font-weight: 700;
        text-transform: capitalize;
        text-align: center;
        position: relative;
        &::before{
            content: '';
            background-color: #f15143;
            width: 70px;
            height: 2px;
            position: absolute;
            top: -62%;
            left: 47%;

        }
    }
    h1{
        text-align: center;
        margin: 2rem 0;
    }
    .cards{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`