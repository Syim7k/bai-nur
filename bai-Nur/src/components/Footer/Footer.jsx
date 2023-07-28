import React from 'react';
import LogoFoot from "./img/nurbai-transformed 2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="container">
          <div className='wrapper-footer'>
            <img src={LogoFoot} alt="" />
            <p>Спортивная одежда НА ЗАКАЗ <br />
               По городу Бишкек и всему <br />
               Кыргызстану. Только оригинальные <br />
               товары. </p>

              <div className='catalog-footer'>

               <p>Категории</p>
               <p>Для мужчин</p>
               <p>Для Женщин</p>
               <p>Для детей</p>
              </div>

              <div className='messeger-footer'>
                <p>Мы в соц.сетях</p>
                <i className="belissimo bi bi-instagram"></i>
                <i className=" belissimo  bi bi-telegram"></i>
                <i className=" belissimo  bi bi-whatsapp"></i>
                <i className="belissimo  bi bi-envelope-at"></i>
              </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer