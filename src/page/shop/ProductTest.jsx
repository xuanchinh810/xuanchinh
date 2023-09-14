import React from 'react'
import {Fade} from 'react-awesome-reveal'

export const ProductTest = (props) =>{
    const {id,productName,productImage,productType,productDescribe,productPrice,price}= props.data;
    return (  
    <div className='grid-item '>

      <Fade duration={4000}>
        <a href="/card_1">
            
            <div className="card border-0  align-items-center" >
              <div className="img-container-product ">
              <img className="card-img-top img-hover object-fit-cover" src={productImage} alt="Card image cap"
               />
               </div>
              <h3 className="card-title product-title">{productName}</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              {productType}
            </h6>
              <p className="card-text ">
                {productDescribe}
              </p>
              <p className='product-price'>{productPrice}</p>
            </div>
            </a>
            <button className='align-items-center' type='submit'
                  style={{
                    background: '#000',
                    color: "#fff",
                    padding: 15,
                    fontFamily: "Public Sans",
                    fontSize:12,
                  }}>
                  THÊM SẢN PHẨM
                </button>
            </Fade>
    </div>)
  
};
export default ProductTest;