import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './routes/homepage/homepage.component';
import Shop from './routes/shop/shop.component'; 
import Authentication from './routes/authentication/authentication.component';
import Header from './components/header/header.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/auth' component={Authentication} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
};

export default App;
