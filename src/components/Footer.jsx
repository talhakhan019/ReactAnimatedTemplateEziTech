import React from 'react'
import styled from '@emotion/styled'
const Footer = () => {
  return (
    <Container>
        <img src="./images/logo.png" alt="" />
        <p>© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
        <div className='social-links'>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-linkedin-in'></i>
            <i className='fab fa-instagram'></i>
            <i className="fab fa-behance"></i>
        </div>
    </Container>
  )
}

export default Footer
const Container = styled.div`
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 95%;
    margin: 20px auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 40px;
    .social-links {
      display: flex;
      i{
        margin-left: 40px;
        padding: 15px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: orange;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.6s ease ;
        color: #fff;
        &:hover{
          opacity: 0.7;
        }
      }

    }
`