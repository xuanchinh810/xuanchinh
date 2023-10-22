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
function App() {
  return (
<div>
 <Router>
  <Routes>
    <Route element={<Layout/>}> 
    <Route path="/" element={<Homepage />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/introduction" element={<Introduction />} />
    <Route path="/instruct" element={<Instruct/>} />
    <Route path='/product' element={<Product />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/instruct/active-instruct' element={<ActiveInstruct />} />
    <Route path='/policy' element={<Policy/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/producttest' element={<ProductTest/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/shop/:id' element={<Card_1/>} />
    </Route>
  </Routes>
</Router> 

</div>
  );
}

export default App;
