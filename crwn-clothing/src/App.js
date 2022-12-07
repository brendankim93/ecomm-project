import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/homepage/homepage.component';
import Shop from './routes/shop/shop.component'; 
import Authentication from './routes/authentication/authentication.component';
import Header from './components/header/header.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    );
};

export default App;
