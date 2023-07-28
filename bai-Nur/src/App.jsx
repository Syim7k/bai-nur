import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Man from './pages/Man/ManPage';
import Women from './pages/Women/WomenPage'
import Kids from './pages/Kids/KidsPage'
import FormPage from './components/FormPage/FormPage';
import SalePage from './pages/Sale/SalePage';
import Basket from './components/basket/Basket';
import Loading from './pages/Home/Loading';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {
  const [loading , setLoading] = useState(true)
 

  useEffect(() =>{
    if(loading){
    setTimeout(() => {
    setLoading(false);
  }, 2000);
    }
  },[loading] )

  if (loading) return <Loading/>

  return (
    <>
     <Routes>
      <Route path ='/' element = {<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Man' element={<Man/>}/>
          <Route path='/Women' element={<Women/>}/>
          <Route path='/Kids' element={<Kids/>}/>
          <Route path='Sale' element={<SalePage/>}/>
          <Route path='/Form' element={<FormPage/>}/>
          <Route path='/Basket' element={<Basket/>}/>
      </Route>   
     </Routes>
    </>
  )
}

export default App
