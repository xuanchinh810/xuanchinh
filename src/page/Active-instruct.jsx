import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import animationData from '../assest/animation2.json'
import Lottie from 'lottie-react';
import Menu from '../component/Menu'

export default function 
() {
  return (
    <div className='container-fluid' style={{
        fontFamily: "Roboto"
    }}>
        <Header />
        <div className="white-box" style={
            {
                marginTop: 100,
            }
        }>
        </div>
        <div className="container">
            <div className="menu " style={{
                padding: 10
            }}>
                <a href="/homepage" >Trang chủ/ </a>
                <a href="/">Hướng dẫn</a>
            </div>
            <div className="row p-20 border mb-20" style={{
                backgroundColor: "rgb(255,255,255)"
            }}>
                <div className="col-sm-3">
                  <Menu />
                </div>
                <div className="col-sm-9" style={{ display: "flex"  }}>
                    <div style={{ flex: 1 }}>
                        <h1 
                        style={{padding: 20}}>Hướng dẫn kích hoạt thẻ NFC</h1>
                        {/* Thêm nội dung bên trái ở đây */}
                        <p>Danh thiếp điện tử NFC (Near Field Communication) là một công nghệ giao tiếp ngắn phạm vi, cho phép trao đổi thông tin giữa hai thiết bị khi chúng được đặt gần nhau, thường là trong khoảng cách vài centimet. NFC đã tạo ra nhiều ứng dụng độc đáo, trong đó danh thiếp điện tử NFC là một ví dụ sáng sủa.</p>
                        <div>
                            <h3>HƯỚNG DẪN KÍCH HOẠT</h3>
                            <ul>
                                <li>
                                    Bước 1: Đăng ký tài khoản
                                    <p>Quét mã QR trên thẻ để Đăng ký tài khoản HTCard (Nếu đã có tài khoản thì đăng nhập)</p>
                                </li>
                                <li>
                                    Bước 2: Kích hoạt thẻ
                                    <p>Sau khi đăng nhập thành công, Quét lại mã QR trên thẻ để đến trang kích hoạt</p>
                                </li>
                                <li>
                                    Bước 3: Nhập mã Kích hoạt để kích hoạt thẻ
                                    <p>Nhập mã Kích hoạt vào ô dưới và nhấn nút "Kích hoạt thẻ"</p>
                                </li>
                            </ul>
                        </div>
                        <div className="suggestion">
                        <h4 
                        style={{
                            padding: 10
                        }}>CÁC BÀI VIẾT LIÊN QUAN</h4>
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

                    <div className="lottie  text-center" style={{ display: "fixed", marginTop: 50 }}>
                        <Lottie animationData={animationData} style={{ width: "400px", height: "400px" }} />
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
