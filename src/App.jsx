import './App.css';
import Homepage from './page/Homepage'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Introduction from './page/Introduction';
import Header from './component/Header';
import Instruct from './page/Instruct';
import Contact  from './page/Contact';
import ActiveInstruct from './page/Active-instruct';
import Product from './page/Product';
import Card1 from './page/Card_1'
import Policy from './page/Policy';
import Shop from './page/shop/Shop';
import ProductTest from './page/shop/ProductTest';
import Cart from './page/cart/Cart';

function App() {
  return (
    <>
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/introduction" element={<Introduction />} />
    <Route path="/instruct" element={<Instruct/>} />
    <Route path='/product' element={<Product />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/instruct/active-instruct' element={<ActiveInstruct />} />
    <Route path='/Card_1' element={<Card1/>} />
    <Route path='/policy' element={<Policy/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/producttest' element={<ProductTest/>} />
    <Route path='/cart' element={<Cart/>} />
  </Routes>
</BrowserRouter> 


</>
  );
}

export default App;
