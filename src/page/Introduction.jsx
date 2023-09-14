import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import Form from '../component/Form'
export default function Introduction() {
  
  return (
    <div className='container-fluid' style={{
      fontFamily:"Roboto"
    }}>
      <span className=''>
          <Header />
      </span>
    
      <div className="white-box" 
      // style={{
      //     marginTop: 100,
      //   }}
        >
      </div>
      <div className="container">
        <div className="menu "style={{
          padding: 10
        }}>
          <a href="/homepage" >Trang chủ</a>
          <a href="/">/Giới thiệu</a>
        </div>
        <div className="row p-20 border mb-20" style={{
          backgroundColor: "rgb(255,255,255)"
        }}>
          <div className="col-sm-3">
           <Menu />
          </div>
          <div className="col-sm-9 ">
            <h3 
            style={{
              padding: 15
            }}>Giới thiệu</h3>
            <div className="card-holder "
            style={{
              padding:10
            }}>
              <div className="row">
                <div className="col">

                <div className="card border-0" style={{ width: "18rem" }}>
                    <img className="card-img-top object-fit-cover" src="https://cdn.ecard.vn/upload/thumb/file/2023/02/0001/mau-thiet-ke-anh-batdongsan98.png" alt="Card image cap" 
                    style={{
                        width: 287,
                        height: 204
                    }}/>
                    <div className="card-body">
                      <h5 className="card-title">Hướng dẫn kích hoạt thẻ</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <a href="/instruct/active-instruct" className="btn btn-primary">
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">

                <div className="card border-0" style={{ width: "18rem" }}>
                    <img className="card-img-top object-fit-cover" src="https://cdn.ecard.vn/upload/thumb/file/2023/02/0001/mau-thiet-ke-anh-batdongsan98.png" alt="Card image cap" 
                    style={{
                        width: 287,
                        height: 204
                    }}/>
                    <div className="card-body">
                      <h5 className="card-title">Hướng dẫn kích hoạt thẻ</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <a href="/instruct/active-instruct" className="btn btn-primary">
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col">
          
                <div className="card border-0" style={{ width: "18rem" }}>
                    <img className="card-img-top object-fit-cover" src="https://cdn.ecard.vn/upload/thumb/file/2023/02/0001/mau-thiet-ke-anh-batdongsan98.png" alt="Card image cap" 
                    style={{
                        width: 287,
                        height: 204
                    }}/>
                    <div className="card-body">
                      <h5 className="card-title">Hướng dẫn kích hoạt thẻ</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </p>
                      <a href="/instruct/active-instruct" className="btn btn-primary">
                        Xem thêm
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Form />
      <Footer />



    </div>

  )
}
