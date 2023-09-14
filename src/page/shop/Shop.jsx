import React from 'react'
import { productData } from '../../productData'
import ProductTest from './ProductTest'
import Header from '../../component/Header'
import Footer from '../../component/Footer'


function Shop() {
  return (
    <div className='container-fluid'>
        <Header/>
        <div className='grid-container'>
             {productData.map((product)=>(
            <ProductTest data={product} className='grid-item'/>
        ))}
        </div>
       
        <Footer/>

    </div>
  )
}

export default Shop