import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Fade } from 'react-awesome-reveal';
import Form from '../component/Form';

export default function Card_1() {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
    setCount(count - 1);
  };

  return (
    <div >
      <Header />
      {/* trở về */}
      <div className="container-xxl"
        style={{
          padding:0,
        }}
      >
        <div className="row flex " style={{ margin: 54, display: 'flex' }}>
          <div className="col-2 inline hover-underline-animation "
          >
            <a href="/shop"
            >
              <i className="bi bi-arrow-left-short flex "
                style={{
                  display: 'flex',
                  fontSize: 24,
                  alignItems: 'center'
                }}
              >
                <p className=' '
                  style={{
                    position: 'inherrit',
                    fontFamily: "Public Sans",
                    alignItems: 'center',
                    paddingLeft: 6,
                    marginBottom: 0,
                    fontWeight:500,

                  }}>TRỞ VỀ</p>
              </i>
            </a>
          </div>
        </div>

        <div className="row "
          style={{
            marginBottom: 20
          }}>
          <div className="col-6 m-10">
            {/* ảnh */}
            <div className="row flex mb-1">
              <img src="https://griffycard.com/cdn/shop/files/Dawn3D-01_990x.png?v=1687158826" alt=""
                style={{
                  width: '100%',
                  height: '100%'
                }} />
            </div>
            <div className="row">
              <img src="https://griffycard.com/cdn/shop/files/dawn_990x.jpg?v=1687231713" alt=""
                style={{
                  width: '100%',
                  height: '100%'
                }} />
            </div>
            <div className="row">
              <div className="col">
                <img src="https://griffycard.com/cdn/shop/files/Dawn2Front_990x.png?v=1687158826" alt=""
                  style={{
                    width: '100%',
                    height: '100%'
                  }} />
              </div>
              <div className="col">
                <img src="https://griffycard.com/cdn/shop/files/Dawn2Back_990x.png?v=1687158826" alt=""
                  style={{
                    width: '100%',
                    height: '100%'
                  }} />
              </div>


            </div>
            {/* zzz */}


          </div>

          <div className="col-6 justify-content-start"
            style={{
              paddingLeft: 60

            }}>
            <Fade duration={2500}>
              <h3
                className="card-title product-title row"
                style={{ fontSize: 48 }}
              >
                CARD 1
              </h3>
            </Fade>

            <h6 className='hover-underline-animation'
              style={{
                margin: 10,
                marginBottom: 20,
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG THẺ NHỰA
            </h6>
            <div className="row">
              <div className="col justify-content-start">
                <p
                  className="product-price row"
                  style={{ fontSize: 42, marginLeft: 10 }}
                >
                  199.000
                </p>
                <p
                  style={{
                    fontFamily: "Public Sans",
                    fontSize: 14,
                    margin: 10
                  }}>Lựa chọn số lượng</p>
                {/* test */}


                {/* //Số lượng thẻ */}
                <div className="quantity border"
                  style={{
                    marginTop: 20,
                    width: 147
                  }}
                >
                  <button onClick={Minus} className="border-0"
                    style={{
                      height: 36,
                      width: 36,
                    }}>
                    -
                  </button>
                  <input
                    className="border-0 text-center"
                    value={count}
                    onChange={(event) => {
                      setCount(Number(event.target.value))
                    }}
                    style={{
                      height: 36,
                      width: 72,
                    }}
                  />
                  <button className="border-0" onClick={Plus}
                    style={{
                      height: 36,
                      width: 36,
                    }}>
                    +
                  </button>
                </div>
              </div>
              <div className="col d-flex justify-content-end"
                style={{
                  alignSelf: 'end'

                }}>
                <button className='' type='submit'
                  style={{
                    background: '#000',
                    color: "#fff",
                    padding: 15,
                    fontFamily: "Public Sans"
                  }}>
                  THÊM SẢN PHẨM
                </button>
              </div>
              <p className="card-text row"
                style={{
                  marginTop: 40,
                  fontSize: 20,
                  fontFamily: 'Public Sans',
                  fontWeight:400,
                }}>
                Có cầu vồng sau cơn mưa. <br></br>

                Giới thiệu, danh thiếp cao cấp và phong cách nhất sẽ được cá nhân hóa theo tên của bạn. Với hiệu ứng cầu vồng bóng loáng và các đường viền chạm nổi để tăng thêm cảm giác và tâm trạng.<br></br>

                Thẻ polyvinyl cao cấp này được tích hợp công nghệ NFC và QR để chia sẻ tức thì tới điện thoại của mọi người:</p>
              <ul data-mce-fragment="1" className=''
                style={{
                  paddingLeft: 40,
                  fontFamily:'public sans',
                  fontSize: 20,
                  fontWeight:400,
                }}>
                <li >Thông tin liên lạc</li>
                <li >Hồ sơ xã hội</li>
                <li >Hồ sơ thanh toán (Grabpay, TouchnGo)</li>
                <li >Link mua hàng (Shopee, LAZADA)</li>
                <li >Tính năng kết nối (trao đổi liên lạc 2 chiều)</li>
                <li >Nút lưu ngay vào liên hệ</li>
                <li >Trang web và hơn thế nữa!</li>
              </ul>

              <p style={{
                fontSize: 20,
                fontFamily: 'Public Sans',
                marginBottom:20,
                fontWeight:400,
              }}>
                Bước thay thế của bạn hướng tới môi trường bền vững.</p>
              {/* collapseExample */}
              <div id="accordion"
              style={{
                fontWeight:400,
                fontFamily:'Public Sans'
              }}>
                <div class="card collapse-card"
                
              >
                  <div class="card-header border-0 d-flex" id="headingOne"
                  style={{
                  }}
                  >
                    <i class="bi bi-info-lg"></i>
                    <h5 class="mb-0">
                      <button class="btn btn-link border-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                        style={{
                          textDecoration: 'none',
                          color: '#000',
                          border: '0 0 0 0'
                        }}>
                        Chất liệu
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      Chip NFC

                      Polyvinyl-Carbonate (PVC) với lớp hoàn thiện mờ cao cấp.
                    </div>
                  </div>
                </div>
                <div class="card collapse-card"
              >
                  <div class="card-header border-0 d-flex" id="headingTwo">
                  <i class="bi bi-airplane"
                  style={{
                    alignItems:'center',
                  }}></i>
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                        style={{
                          textDecoration: 'none',
                          color: '#000'
                        }}>
                        Thời gian giao hàng
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                      Dự kiến ​​hoàn thành trong vòng 3 đến 5 ngày làm việc trước khi bàn giao cho dịch vụ chuyển phát nhanh.
                    </div>
                  </div>
                </div>
                <div class="card collapse-card"
                >
                  <div class="card-header border-0 d-flex" id="headingThree">
                  <i class="bi bi-arrows-angle-expand"></i>
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                        style={{
                          textDecoration: 'none',
                          color: '#000'
                        }}>
                        Kích thước thẻ
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                      8,5cm x 5,4cm (WxH) hoặc giống như thẻ tín dụng của bạn.
                    </div>
                  </div>
                </div>
                <div class="card "
                style={{
                  borderLeft:0,
                  borderRight:0,
                }}
                 >
                  <div class="card-header border-0 d-flex" id="headingFour">
                  <i class="bi bi-shield"></i>
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree"
                        style={{
                          textDecoration: 'none',
                          color: '#000'
                        }}>
                        Bảo quản
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                      Khả năng chịu nước và chịu nhiệt nhỏ.
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
  );
}
