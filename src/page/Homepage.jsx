import React from 'react'
import '../App.css';
import 'animate.css/animate.min.css';
import Lottie from 'lottie-react';
import animationData from '../assest/animation.json'
import animationData2 from '../assest/animation2.json'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Form from '../component/Form'
import { Fade } from "react-awesome-reveal";
export default function Contents() {
  const widthDevice = window.innerWidth;


  return (
    <>
      <Header />
      <div className="container-fluid"
        style={{
          backgroundColor: '#fff',
          padding:0,
        }}>

        <>
          {/* silde show */}
          <div id="carouselExampleIndicators" className="carousel slide border-bottom" data-ride="carousel"
         >
            <div className="carousel-inner containder-fluid" 
            style={{
              padding:0,
            }} >
              <div className="carousel-item active"
              
              >
                <img className="d-block w-100 object-fit-cover" src="https://qrcodechimp.s3.amazonaws.com/blog/wp-content/uploads/2022/12/nfc-card.png" alt="First slide"
                  style={{
                    height: 720,
                    padding:0,
                  }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 object-fit-cover" src="https://tapni.com/cdn/shop/articles/d439bdccb0da4fe364a04510dacf98c0.png?v=1679192709" alt="Second slide"
                  style={{
                    height: 720,
                  }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 object-fit-cover" src="https://cdn.ecard.vn/upload/file/2023/01/0001/slider-anh.png" alt="Third slide"
                  style={{
                    height: 720,
                  }} />
              </div>
            </div> 
      
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="circle">
            <i class="bi bi-arrow-left-short "
            style={{
              height:46,
              width:46,
              margin:0,
              fontSize:24,
              justifyContent:'center',
  
              top:10,
  
            }}></i>
              </span>
            </a>   


            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="circle">
            <i class="bi bi-arrow-right-short d-flex "
            style={{
              height:46,
              width:46,
              margin:0,
              fontSize:24,
              justifyContent:'center',
     
              top:10,


            }}></i>
                 </span>
            </a>
       
          </div>
          <div className="row justify-content-center"
            style={{

            }}
          >
            <h1 className='poppins-500 text-center m-10'
              style={{
                marginBottom: 40,
                marginTop: 80,
                fontSize:42,
                fontWeight: 600
              }}
            >Tạo kết nối có ý nghĩa với từng cái bắt tay.</h1>

            <a className=' btn btn-primary' href="/product"
              style={{
                background: '#000',
                color: "#fff",
                padding: 15,
                width: 200,
                fontSize: 18,
                borderRadius: 0,
                marginBottom: 60
              }}>
              Mua sản phẩm</a>
          </div>

          <div className="row"
            style={{
              backgroundColor: '#000'
            }}
          >
            <div className="row text-center"
              style={{
                marginBottom: 20,
                marginTop: 20,
                fontWeight: 500,
                fontSize: 28,
                color: '#fff',

              }}>
              <p className='d-block'>HƠN 5000 KHÁCH HÀNG TIN TƯỞNG HTCard</p>
            </div>
            <div className="row justify-content-center "
              style={{
                columnGap: 150
              }}>
              <img src="https://griffycard.com/cdn/shop/files/Primal-01_550x.png?v=1645088400" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0

                }} />
              <img src="https://griffycard.com/cdn/shop/files/Fuiyoh-01_550x.png?v=1645089350" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0
                }} />
              <img src="https://griffycard.com/cdn/shop/files/medkad-01_550x.png?v=1646301169" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0
                }} />
              <img src="https://griffycard.com/cdn/shop/files/Primal-01_550x.png?v=1645088400" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0
                }} />
            </div>

            <div className="row justify-content-center "
              style={{
                columnGap: 150,
                marginTop: 36,
                marginBottom: 36
              }}>
              <img src="https://griffycard.com/cdn/shop/files/Primal-01_550x.png?v=1645088400" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0

                }} />
              <img src="https://griffycard.com/cdn/shop/files/Primal-01_550x.png?v=1645088400" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0
                }} />
              <img src="https://griffycard.com/cdn/shop/files/Primal-01_550x.png?v=1645088400" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0
                }} />
              <img src="https://griffycard.com/cdn/shop/files/Primal-01_550x.png?v=1645088400" alt=""
                style={{
                  height: 148,
                  width: 148,
                  padding: 0
                }} />
            </div>

          </div>


          <div className="container mx-auto text-center "
          >
            <h1
              style={{
                marginTop: 40,
                fontWeight: 600,
                fontSize: 48

              }}>Sự kì diệu của danh thiếp điện tử</h1>
            <h1
              style={{
                marginBottom: 60,
                fontFamily: "Public Sans",
                fontWeight: 600,
                fontSize: 48
              }}>Nằm trong lòng bàn tay bạn.</h1>
          </div>


          <div className="row mx-auto container"
            style={widthDevice < 600 ? {
              display: 'block',
              marginBottom: 80,

            } : {
              display: 'relative',
              marginBottom: 80,


            }}>
            <div className="col justify-content-center"
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: "Public Sans",
                fontSize: "30px",

              }}>
              <Fade direction='left'>

                <h2 style={{
                  fontWeight: 500,
                  fontSize: '48px'

                }}
                  className='animate__animated animate__backInLeft '
                >Chia sẻ thông tin nhanh chóng.</h2>
              </Fade>
              <p>Thông tin được chia sẻ và lưu một cách nhanh chóng và tiện lợi</p>

            </div>
            <div className="col border object-fit-cover">
              <Lottie animationData={animationData2}
                style={widthDevice > 600 ? {
                  width: '600',
                  height: '600',
                }
                  : {

                    width: 'auto',
                    height: 'auto',
                  }} />
            </div>
          </div>


          <div className="row mx-auto container"
            style={widthDevice < 600 ? {
              display: 'relative',
              flexDirection: 'column-reverse',
              marginBottom: 80
            } : {

              marginBottom: 80,
            }}>
            <div className="col border lottie container object-fit-cover"
              style={{
                width: '600',
                height: '600',
              }}
            >
              <Lottie animationData={animationData}
                style={widthDevice > 600 ? {
                }
                  : {
                    width: 'auto',
                    height: 'auto',
                  }} />
            </div>
            <div className="col justify-content-center"
              style={{
                fontFamily: "Public Sans",
                fontSize: "30px",
                display: 'flex',
                flexDirection: 'column',
                paddingLeft:20
              }}>

              <Fade direction='right'>
                <h2 style={{
                  fontWeight: 500,
                  fontSize: '48px'
                }}
                  className=''
                >Chỉ qua một lần chạm</h2>
              </Fade>
              <p>Tạo ấn tượng đầu tiên khó quên để thu hút đối tác bằng danh thiếp điện tử của bạn. Tất cả trong tầm tay của họ.</p>

            </div>
          </div>


          <div className="row mx-auto container"
            style={widthDevice < 600 ? {
              display: 'block'
            } : {
              display: 'relative'
            }}
          >
            <div className="col mx-auto"
              style={{
                position: "relative",
                paddingTop: "20%",
                fontFamily: "Public Sans",
                fontSize: "30px",
              }}>
              <Fade direction='left'>

                <h2 style={{
                  fontSize: "48px",
                  fontWeight: 500,
                }}
                  className=''
                >Với giao diện bắt mắt</h2>
              </Fade>
              <p>Thẻ được thiết kế với giao hiện bắt bắt, đảm bảo để lại sự ấn tượng trong mắt khách hàng</p>

            </div>
            <div className="col border">
              <img src="https://cdn.shopify.com/s/files/1/0654/2229/5259/products/TapMo.gif?v=1680153153" className='container object-fit-cover'
              />
            </div>
          </div>


          <h1 className='text-center'
            style={{
              fontFamily: "Public Sans",
              fontWeight: 600,
              marginTop: 40
            }}>Một cách thông minh hơn để kết nối

          </h1>


          {/* Carousel wrapper */}


          <div className="product-type container">
            <h1 className=''
              style={{
                fontFamily: "Public Sans",
                fontWeight: 500,
                marginTop: 20,
                fontSize: 24,


              }}>Các loại sản phẩm</h1>
          </div>

          <div
            id="carouselMultiItemExample"
            className="carousel slide carousel-dark text-center"
            data-mdb-ride="carousel"
          >
            {/* Controls */}

            {/* Inner */}
            <div className="carousel-inner py-4">
              {/* Single item */}
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card border-0">
                      <div className="img-container-homepage">
                        <img
                          src="https://griffycard.com/cdn/shop/products/contourfront-01_360x.png?v=1675935373"
                          className="card-img-top img-hover"
                          alt="Waterfall"
                          style={{ objectFit: "cover", height: "300px" }}
                        />
                        </div>
                        <div className="card-body"
                          style={{
                            padding: 0,
                            paddingTop: 10,
                            paddingLeft: 10,

                          }}>
                          <h6 className="card-title justify-content-left"
                            style={{
                              display: 'flex',
                              paddingLeft: 10,
                              paddingBottom: 0,

                            }}>Card mặc định</h6>
                          <h3
                            style={{
                              display: 'block',
                              paddingLeft: 10,
                              display: 'flex',
                              fontWeight: 200,
                            }}
                          >199.000</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="card border-0">
                      <div className="img-container-homepage">
                        <img
                          src="https://griffycard.com/cdn/shop/files/Moon3D-01_360x.png?v=1687158610"
                          className="card-img-top img-hover"
                          alt="Sunset Over the Sea"
                          style={{ objectFit: "cover", height: "300px" }}
                        />
                        </div>
                        <div className="card-body"
                          style={{
                            padding: 0,
                            paddingTop: 10,
                            paddingLeft: 10,

                          }}>
                          <h6 className="card-title justify-content-left"
                            style={{
                              display: 'flex',
                              paddingLeft: 10,
                              paddingBottom: 0,

                            }}>Card mặc định</h6>
                          <h3
                            style={{
                              display: 'block',
                              paddingLeft: 10,
                              display: 'flex',
                              fontWeight: 200,
                            }}
                          >199.000</h3>

                        </div>

                      </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="card border-0">
                        <div className="img-container-homepage">
                        <img
                          src="https://griffycard.com/cdn/shop/files/Dawn3D-01_360x.png?v=1687158826"
                          className="card-img-top img-hover"
                          alt="Sunset over the Sea"
                          style={{ objectFit: "cover", height: "300px" }}
                        />
                        </div>
                        <div className="card-body"
                          style={{
                            padding: 0,
                            paddingTop: 10,
                            paddingLeft: 10,

                          }}>
                          <h6 className="card-title justify-content-left"
                            style={{
                              display: 'flex',
                              paddingLeft: 10,
                              paddingBottom: 0,

                            }}>Card mặc định</h6>
                          <h3
                            style={{
                              display: 'block',
                              paddingLeft: 10,
                              display: 'flex',
                              fontWeight: 200,
                            }}
                          >199.000</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
          </div>

        

          <div className='row '
            style={{
              background: '#121212',
              color: '#fff'
            }}>
            <div className="  row">
              <h3 className='container '
                style={{
                  color: '#fff',
                  fontSize: 28,
                  fontWeight: 600,
                  display: 'flex',
                  paddingTop: 40,
                  paddingBottom: 20,
                  paddingLeft: '15%'


                }} >
                Trải nghiệm hoàn toàn mới khi mua sắm danh thiếp cá nhân.
              </h3>
            </div>
            <div className="d-flex container justify-content-center">
                {/* 1 */}
              <div className="col-3"
                style={{
                  padding: 0.5,
                }}>
                <div className="card-black border-0 p-20">
                  <img
                    src="https://griffycard.com/cdn/shop/files/Untitled-5-01_710x.png?v=1645100951"
                    className="card-img-top"
                    alt="Waterfall"
                    style={{ objectFit: "cover", }}
                  />
                  <div className="card-body d-flex justify-content-start"
                    style={{
                      alignItems: 'left',
                      flexDirection: 'column',
                      paddingLeft:20,
                      height:220,
                    }}>
                    <h6 className="card-title"
                      style={{
                        display: 'flex',
                        paddingBottom: 10,
                        fontSize: 24,
                        fontWeight: 500,
                        lineHeight: '30px',

                      }}>Xây dựng hồ sơ kỹ thuật số của bạn
                    </h6>
                    <p className='d-flex'
                      style={{
                        display: 'flex',
                        justifyContent: 'left',
                        color:'rgba(255,255,255,0.75)',
                        fontSize:20,
                        fontWeight:400,
                      }}
                    >Khi sản phẩm của bạn đến, chỉ cần kích hoạt nó và bắt đầu tùy chỉnh hồ sơ của bạn.</p>
                    <a className=" text-decoration-none d-flex" href="/product"
                      style={{
                        alignSelf:'none',
                        fontSize:18,
                        fontFamily:'Public Sans',
                        color: '#fff',
         
                      }}>
                      <p style={{
                        paddingBottom:0,
                        margin:0,
                      }}>Mua sản phẩm </p>
                      <i className="bi bi-arrow-right d-flex"
                      style={{
                        marginLeft:10,
                        alignItems: 'center',
                      }}></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-3"
                style={{
                  padding: 0.5,
                }}>
                <div className="card-black border-0 p-20">
                  <img
                    src="https://griffycard.com/cdn/shop/files/edit_profile_710x.png?v=1645100041"
                    className="card-img-top"
                    alt="Waterfall"
                    style={{ objectFit: "cover", }}
                  />
                  <div className="card-body d-flex justify-content-start"
                    style={{
                      alignItems: 'left',
                      flexDirection: 'column',
                      paddingLeft: 10,
                      height:220,
                   
                    }}>
                    <h6 className="card-title"
                      style={{
                        display: 'flex',
                        fontFamily:'Public Sans',
                        paddingBottom: 10,
                        fontSize: 24,
                        fontWeight: 500,
                        lineHeight: '30px',

                      }}>Mua một sản phẩm thông minh
                    </h6>
                    <p className='d-flex'
                      style={{
                        display: 'flex',
                        fontFamily: "Public Sans",
                        justifyContent: 'left',
                        color:'rgba(255,255,255,0.75)',
                        fontSize:20,
                        fontWeight:400,
                      }}
                    >Chọn từ sự đa dạng của chúng tôi về thiết kế sản phẩm để phù hợp với phong cách của bạn.</p>
                     <a className=" text-decoration-none d-flex" href="/product"
                      style={{
                        selfAlign: "none",
                        fontSize:18,
                        fontFamily:'Public Sans',
                        color: '#fff',
                      }}>
                      <p style={{
                        marginBottom:0,
                      }}>Kích hoạt thẻ</p>
                      <i className="bi bi-arrow-right d-flex"
                      style={{
                        marginLeft:10,
                        alignItems: 'center',
                      }}></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-3"
                style={{
                  padding: 0.5,
                }}>
                <div className="card-black border-0 p-20">
                  <img
                    src="https://griffycard.com/cdn/shop/files/connecting-01_710x.png?v=1645102379"
                    className="card-img-top"
                    alt="Waterfall"
                    style={{ objectFit: "cover", }}
                  />
                  <div className="card-body d-flex justify-content-start"
                    style={{
                      alignItems: 'left',
                      flexDirection: 'column',
                      paddingLeft: 10,
                      height:220,
                 
                    }}>
                    <h6 className="card-title"
                      style={{
                        display: 'flex',
                        paddingBottom: 10,
                        fontSize: 24,
                        fontWeight: 500,
                        lineHeight: '30px',
                        fontFamily:'Public Sans'

                      }}>Bắt đầu chia sẻ
                    </h6>
                    <p className='d-flex'
                      style={{
                        display: 'flex',
                        fontFamily: "Public Sans",
                        justifyContent: 'left',
                        color:'rgba(255,255,255,0.75)',
                        fontSize:20,
                        fontWeight:400,
                      }}
                    >Chia sẻ doanh nghiệp của bạn chỉ bằng một cú chạm tới điện thoại của mọi người và tạo mạng lưới của bạn</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          

          <div className="container mx-auto text-center "
          >
            <h1
              style={{
                marginTop: 40,
                fontFamily: "Public Sans",
                fontWeight: 600,
                fontSize: 48

              }}>Quyền riêng tư và bảo mật</h1>
            <h1
              style={{
                marginBottom: 60,
                fontFamily: "Public Sans",
                fontWeight: 600,
                fontSize: 48
              }}>Nằm trong lòng bàn tay bạn.</h1>
          </div>
          <div className="row mx-auto container"
            style={widthDevice < 600 ? {
              display: 'block',
              marginBottom: 80,

            } : {
              display: 'relative',
              marginBottom: 80,


            }}>
            <div className="col justify-content-center"
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: "Public Sans",
                fontSize: "30px",

              }}>
              <Fade direction='left'>

                <h2 style={{
                  fontWeight: 500,
                  fontSize: '48px'

                }}
                  className='animate__animated animate__backInLeft '
                >Chia sẻ thông tin nhanh chóng.</h2>
              </Fade>
              <p>Thông tin được chia sẻ và lưu một cách nhanh chóng và tiện lợi</p>

            </div>
            <div className="col border object-fit-cover"
              style={{
              
              }}>
            <img className='object-fit-cover' src="https://griffycard.com/cdn/shop/files/MacBook_Pro_16_750x.png?v=1645107109" alt="" />
            </div>
          </div>


          <div className="row mx-auto container"
            style={widthDevice < 600 ? {
              display: 'relative',
              flexDirection: 'column-reverse',
              marginBottom: 80
            } : {

              marginBottom: 80,
            }}>
            <div className="col border lottie container object-fit-cover"
              style={{
                width: '600',
                height: '600',
              }}
            >
            <img src="https://griffycard.com/cdn/shop/files/deactivate_750x.png?v=1645099568" alt="" />
            </div>
            <div className="col justify-content-center"
              style={{
                fontSize: "30px",
                display: 'flex',
                flexDirection: 'column',
                paddingLeft:20

              }}>

              <Fade direction='right'>
                <h2 style={{
                  fontWeight: 500,
                  fontSize: '48px'
                }}
                  className=''
                >Chỉ qua một lần chạm</h2>
              </Fade>
              <p>Tạo ấn tượng đầu tiên khó quên để thu hút đối tác bằng danh thiếp điện tử của bạn. Tất cả trong tầm tay của họ.</p>

            </div>
          </div>



          <Form style={{
            padding:0
          }}/>
        </>
        <Footer className="container-fluid"
        style={{
          width:'100%',
        }}/>
      </div>
    </>
  )
}
