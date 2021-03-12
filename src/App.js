import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart/Cart';
import Default from './component/Default';
import Modal from './component/Modal';
import Footer from './component/Footer';

export default function App() {
  return (
   <React.Fragment>
  <Navbar/>
  <Switch>
    <Route  exact path="/" component={ProductList} />
    <Route   path="/details" component={Details} />
    <Route   path="/cart" component={Cart} />
    <Route   component={Default} />

  </Switch>
  <Modal/>
<Footer/>
   </React.Fragment>
  )
}

