import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import AOS from "aos"
import '../../node_modules/aos/dist/aos.css'
const Baner = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
})
  return (
    <Container>
      <div className="left">
        <p>The Fast Way To Grow Your Business</p>
        <h1>Bring <img className='idea_img' data-aos="zoom-in-right" data-aos-duration="3000" src="./images/banerleft2.png" alt="" />  <img data-aos="zoom-in-right" data-aos-duration="3000" src="./images/banerleft1.png" alt="" /> Something Big Together!
        </h1>
        <span>In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Document Or A Typeface .</span>
        <div className="cta_btns">
          <button data-aos="fade-up" data-aos-duration="10000" className='get_started'>Get Started Today</button>
          <button data-aos="fade-up" data-aos-duration="10000" className="watch_video"><i className='fa fa-play'></i> Watch Video</button>
        </div>
      </div>
      <div className="right">
        <div className="box">
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='actor' src="./images/baner1.png" alt="" />
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='stat'  src="./images/baner2.png" alt="" />
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='save' src="./images/baner3.png" alt="" />
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='loading' src="./images/baner4.png" alt="" />
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='check' src="./images/baner5.png" alt="" />
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='dashboard' src="./images/baner6.png" alt="" />
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='toggle' src="./images/baner7.png" alt="" />
          <img data-aos="zoom-in-right" data-aos-duration="3000" className='line' src="./images/banermiddle.png" alt="" />
        </div>
      </div>
    </Container>
  )
}

export default Baner
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  .left{
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .cta_btns{
      .watch_video{
        padding: 20px 40px;
        border-radius: 50px;
        background-color: transparent;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        border: none;
        transition: 0.3s all ease;
        &:hover{
          opacity: 0.8;
        }
        i{
          /* margin: 0px 10px; */
          background-color: #f0aa0f;
          color: #fff;
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 50%;
          font-size: 1.2rem;
        }
      }
      .get_started{
        padding: 20px 40px;
        color: #fff;
        background: #9156f7;
        border-radius: 50px;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        border: none;
        transition: 0.3s all ease;
        &:hover{
          opacity: 0.8;
        }
      }
    }
    p{
      background: transparent linear-gradient(97deg,#b981f9 0%,#b981f9 9%,#9f62f7 27%,#f13c0d 47%,#f15143 63%,#eda800 83%,#f0aa0f 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 18px;
      font-weight: 700;
      text-transform: capitalize;
      letter-spacing: 0.03cm;
    }
    span{
      color: #586780;
      font-size: 16px;
      font-weight: 400;
      text-transform: capitalize;
      margin: 50px 0;
    }
    h1{
      font-size: 90px;
      .idea_img{
        animation: moveRotate 10s linear infinite;
      }
    }
    @keyframes moveRotate {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(10deg);
        }
        100% {
          transform: rotate(0);
        }
      }
  }
  .right{
    flex: 6;
    display: flex;
    justify-content: right;
    .box{
      margin-top: 8rem;
      background-color: #d1d9d6;
      width: 500px;
      height: 370px;
      border-radius: 50px;
      transform: rotate(6deg);
      z-index: -1;
      position: relative;
      img{
        position: absolute;
        width: 10%;
        transform: rotate(-6deg);
        animation: moveUpDown 5s linear infinite;
      }
      .actor{
        width: 130%;
        top: -38%;
        left: -5%;
        animation: moveUpDown 5s linear infinite;
      }
      
      .stat{
        width: 45%;
        left: -30%;
        top: -10%;
      }
      .check{
        width: 45%;
        left: -20%;
        bottom: 2%;
      }
      .dashboard{
        animation: moveLeftRight 5s linear infinite;
        bottom: -15%;
        width: 30%;
        right: 5%;
      }
      .save{
        width: 25%;
        left: -17%;
        top: -33%;
      }
      .loading{
        animation: moveLeftRight 3s linear infinite;
        width: 16%;
        top: -30%;
        left: 13%;
      }
      .toggle{
        animation: moveLeftRight 3s linear infinite;
        width: 20%;
        right: 9%;
        top: -23%;
      }
      .line{
        width: 100%;
        left: -66%;
        top: 25%;
        z-index: -1;
        animation: none;
      }
      @keyframes moveUpDown {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(3%);
        }
        100% {
          transform: translateY(0);
        }
      }
      @keyframes moveLeftRight {
        0% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(15%);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
  }
`