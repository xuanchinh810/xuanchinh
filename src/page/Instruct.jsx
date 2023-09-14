import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import animationData from '../assest/animation2.json'
import Lottie from 'lottie-react';
import Menu from '../component/Menu'

export default function () {
  return (
    <div className='container-fluid' style={{
      fontFamily: "Public Sans"
    }}>
      <Header />
      <div className="container">
        <h3
          style={{
            fontWeight: 600,
            paddingTop:40,
            paddingBottom:20,
          }}>Cách hoạt động</h3>
        <iframe width="100%" height="420" src="https://www.youtube.com/embed/LzC5NYU5Do4?si=07IKYahjd3OwVQ3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* collapseExample */}
        <div className="container"
          style={{
            justifyContent: 'center',
            width: '80%', 

          }}>
          <h1 className='text-center'
            style={{
              display: 'block',
              fontWeight: 600,
              paddingTop:40,
              paddingBottom:20,

            }}>Các câu hỏi thường gặp ?</h1>
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
                   <i class="bi bi-bag-check"></i>
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
                  <i class="bi bi-bag-check"></i>
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
                  <i class="bi bi-bag-check"></i>
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
                  <i class="bi bi-bag-check"></i>
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





      <Footer />
    </div >

  )
}
