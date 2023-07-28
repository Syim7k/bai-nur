import React, { useState } from 'react';
import Images from "./images/Rectangle 6(1).png";
import Images2 from "./images/Rectangle 7(3).png";
import Images3 from "./images/Rectangle 8.png";
import './Home.css'




const clothes = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71xH0OBmwyL._AC_SR400,400_.jpg",
    title: "Мужские кроссовки New Balance Fresh Foam 680v7 для бега",
    price: "110",
    catolog: "Man, Sneaks",
    size: "39,40,41,42"
  }, 
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71SBLO6nAvS._AC_SR400,400_.jpg",
    title: "Детские кроссовки adidas Originals Kids Forum Low (Toddler) на каждый день ",
    price: "75",
    catolog: "KIDS, Sneaks",
    size: "29, 32,34,36,38"
  }, 
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71FcOAh3AiL._AC_SR400,400_.jpg",
    title: "Мужские кроссовки PUMA Ultra Match Firm Ground/Artificial Ground ",
    price: "115",
    catolog: "Man, Sport",
    size: "39,40,41,42,43,44.5"
  }, 
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71a4D5Uq23L._AC_SR400,400_.jpg",
    title: "Мужские кроссовки Champion Flexer Switch на каждый день ",
    price: "110",
    catolog: "Man, ",
    size: "38,39,40,41,42"
  }, 
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/718GX7Q21kL._AC_SR400,400_.jpg",
    title: "Женские кроссовки New Balance Classics 237v1 на каждый день ",
    price: "99",
    catolog: "Women",
    size: "35,36,37,38,39,40,41,42,43,44,45"
  }, 
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/61QmEeaAtvL._AC_SR400,400_.jpg",
    title: "Женские кроссовки SKECHERS Court Classics Eden LX Hands Free Slip-Ins™ на каждый день ",
    price: "115",
    catolog: "Women",
    size: "35, 36,37"
  }, 
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/61QmEeaAtvL._AC_SR400,400_.jpg",
    title: "Мужская футболка Nike Sportswear Premium Essentials Max90 Chic Dye Short-Sleeve ",
    price: "6540",
    catolog: "Man, T-Shirt",
    size: "M, L, S, XL, XXL, XXXL"
  }, 
   {
    id: 7,
    img: "https://m.media-amazon.com/images/I/61QmEeaAtvL._AC_SR400,400_.jpg",
    title: "Мужская футболка Nike Sportswear Premium Essentials Max90 Chic Dye Short-Sleeve ",
    price: "654",
    catolog: "Man, T-Shirt",
    size: "M, L, S, XL, XXL, XXXL"
  }, 
]



const Home = () => {
  const [value, setValue] = useState('');
  const filteredStores = clothes.filter(clothes1 => {
    return clothes1.title.toLowerCase().includes(value.toLowerCase());
  });


  return (
    <div>
        <div className="home">
            <div className="block-home">
                <div className="home-tittle">
                    <h1 className='h1-logogo'>Добро пожаловать в мир BaiNur</h1>
                    <h2 className='h2-logogo'>BaiNur | Мода и стиль</h2>
                </div>
            </div>

            <section className='section'>
              <div className="section-home">
                <div className="section-wrapper">
                  <div className="section-title">
                   
                  </div>
                    <div className='block-search'>
                  
                  <input onChange={(event) => setValue(event.target.value)} className='input-search' type="text" placeholder='search'/>
                  </div>
                  <div className='map-box'>
                          {filteredStores.map((e)=> (
                            <div key={e.id} className='box-store'>
                            <i class="bi bi-suit-heart"></i>
                            <img className='images-fut' src={e.img} alt="" />
                            <div className='box-content'>
                              <h2 className='name-h2'>{e.catolog}</h2>
                              <p className='title-lorem'>{e.title}</p>
                              <p className='price'>Price: {e.price}$</p>
                              <button className='basket-btn'>+ add to cart</button>
                            </div>
                          </div>
                          ))}
                        <div className='images-home'>
                          <img src={Images} alt="" />
                        </div>
                        </div> 
                        
                        <div className='map-box'>
                          {filteredStores.map((e)=> (
                            <div key={e.id} className='box-store'>
                            <i class="bi bi-suit-heart"></i>
                            <img className='images-fut' src={e.img} alt="" />
                            <div className='box-content'>
                              <h2 className='name-h2'>{e.catolog}</h2>
                              <p className='title-lorem'>{e.title}</p>
                              <p className='price'>Price: {e.price}$</p>
                              <button className='basket-btn'>+ add to cart</button>
                            </div>
                          </div>
                          ))}
                        <div className='images-home'>
                          <img src={Images2} alt="" />
                        </div>
                        </div> 
                        
                        <div className='map-box'>
                          {filteredStores.map((e)=> (
                            <div key={e.id} className='box-store'>
                            <i class="bi bi-suit-heart"></i>
                            <img className='images-fut' src={e.img} alt="" />
                            <div className='box-content'>
                              <h2 className='name-h2'>{e.catolog}</h2>
                              <p className='title-lorem'>{e.title}</p>
                              <p className='price'>Price: {e.price}$</p>
                              <button className='basket-btn'>+ add to cart</button>
                            </div>
                          </div>
                          ))}
                        <div className='images-home'>
                          <img src={Images3} alt="" />
                        </div>
                        </div>

                </div>
              </div>
            </section>

          </div>

    </div>
  )
}

export default Home