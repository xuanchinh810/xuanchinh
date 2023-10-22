import './App.css';
import Homepage from './page/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from './page/Introduction';

import Instruct from './page/Instruct';
import Contact  from './page/Contact';
import ActiveInstruct from './page/Active-instruct';
import Product from './page/Product';
import Policy from './page/Policy';
import Shop from './page/shop/Shop';
import ProductTest from './page/shop/ProductTest';
import Cart from './page/cart/Cart';
import { ShopContextProvider } from './page/context/shop-context';
import Card_1 from './page/Card_1';
import { Layout } from './Layout';

import Footer from './component/Footer'
import Header from './component/Header'
function App() {
  return (
<div>
<Header/>
      <Homepage/>
        <Footer/>

</div>
  );
}

export default App;
