import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import AllRoutes from '../AllRoutes/AllRoutes';
import Footer from './Footer';
import Header from './Header';


export default function LayOut() {
  return (
    <div>
    
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
    <AllRoutes/>
    
      
      <Footer/>
    

    </div>
  )
}
