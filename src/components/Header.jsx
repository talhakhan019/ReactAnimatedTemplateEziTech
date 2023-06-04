import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styled from '@emotion/styled'
const Header = () => {
    const [activeLink, setActiveLink] = useState('signup');
  return (
    <Container>
        <div className="left">
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="menu">
                <NavLink className='activePage'>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Contact</NavLink>
            </div>
        </div>
        <div className="right">
            <div>
                <div className={activeLink==='login'?'login_signup activeLink':'login_signup'} onClick={()=>setActiveLink('login')}>Login</div>
                <div className={activeLink==='signup'?'login_signup activeLink':'login_signup'} onClick={()=>setActiveLink('signup')}> <i className='fa-regular fa-user'></i> SignUp</div>
            </div>
        </div>
    </Container>
  )
}

export default Header
const Container = styled.div`
    width: 95%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        align-items: center;
        .logo{
            margin-right: 20px;
            position: relative;
            img{
                width: 100%;
            }
            &::after{
                content: '';
                width: 1px;
                height: 30px;
                position: absolute;
                background-color: rgba(0,0,0,0.3);
                top: 30%;
                right: -15%;
            }
        }
        
        .menu{
            a{
                text-decoration: none;
                color: grey;
                margin-left: 40px;
                cursor: pointer;
                transition: 0.3s all ease;
                &:hover{
                    color: #000;
                }
                &.activePage{
                    color: #000;
                }
            }
            
        }
    }
    .right{
        div{
            display: flex;
            .login_signup{
                border-radius: 50px;
                padding: 15px 40px;
                cursor: pointer;
                transition: 0.3s all ease;
                &:hover{
                    opacity: 0.7;
                }
                &.activeLink{
                    background-color: #f0aa0f;
                    color: #fff;
                }
                i{
                    margin-right: 10px;
                }
            }
        }
    }
`