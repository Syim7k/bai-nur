import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from './image/nurbai-transformed.png'
import User from './image/Frame 7.png'
// import Basket from './image/simple-line-icons_basket.png'
import './Header.css'


const Header = () => {
    // const Navigate = useNavigate()

    const [cartOpen, setCartOpen] = useState("")
  return (
    <header className='header'>
        <div className="container">
            <div className="block-header">
                <div className="logo">
                    <img className='bai-nurLogo' src={Logo} alt="" />
                </div>
                <nav className='nav-bar'>
                    <ul>
                    <Link to="/">Главная</Link>
                    <Link to="/About">О Нас</Link>
                    <Link to="/Man">Для Мужчин</Link>
                    <Link to="/Women">Для Женщин</Link>
                    <Link to="/Kids">Для Детей</Link>
                    <Link to="/Basket"> 
                    <button className='basket'
                     onClick={() => {
                        Navigate('../basket/Basket.jsx')
                     }}>Корзина</button>
                    </Link>
                    <img  className='user-icon' src={User} alt='' />
                  
                   
                    
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header