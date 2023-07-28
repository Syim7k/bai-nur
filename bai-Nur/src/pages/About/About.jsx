import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-block">
        <div className="about-wrapper">
          <div className="about-title">
            <h1 className='h1-tittle'>О нас</h1>
            <h4> <span className='span-text'>Главная </span>// О Нас </h4>
            <h3>О нас</h3>
          </div>
          <div className="section-text">
            <h2>BaiNur KG</h2>
            <p>Sneaks.KG - это интернет-магазин спортивной одежды и обуви. Мы продаем только оригинальные вещи,<br/>   обувь и аксессуары от ведущих спортивных брендов - Nike, Adidas, Puma, Reebok, VANS и др. На данный <br/> момент мы возим товары только на заказ. Мы доставляем вещи из Турции, США, России. <br/>
            Мы выкупаем товары с официальных сайтов брендов и их партнеров. Каждого поставщика мы <br/>тщательно проверяем. На данном сайте товары собираются с онлайн магазинов в автоматизированном <br/>режиме.<br/>
            Также мы выкупаем с локальных аутлетов и выставляем их на нашей страничке в <a href="#">Instagram</a> 
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About