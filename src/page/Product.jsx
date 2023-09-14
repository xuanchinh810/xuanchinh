import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Form from '../component/Form'
import { Fade } from 'react-awesome-reveal'
export default function () {
      const widthDevice = window.innerWidth;
  return (
    <>
      <Header />
      <div className='container-fluid'
      style={{
        fontFamily:'Public Sans'
      }}>
          <div className="row"
          style={{
            marginRight:0,
            width:'100%',
            padding:80,
          }}>
            <div className="col-6">
              <h1
                style={{
                  color: "rgb(177,155,101)",
                  fontFamily: "Public Sans",
                  paddingLeft:'10%',

                }}>ĐA DẠNG, NHIỀU MẪU THẺ</h1>
            </div>
            <div className="col-5">
              <p
                style={{
                  fontFamily: "Public Sans",
                  fontSize:18,
                }}>HT-Card luôn có đa dạng các mẫu thẻ từ: thẻ kim loại, thẻ nhựa, thẻ custom,... Quý khách có thể tha hồ lựa chọn nhưng mẫu thẻ cho riêng mình với những thiết kế mang tính cá nhân hóa </p>
            </div>
          </div>    

        <div className="row container  "
          style={widthDevice>600 ?{
            paddingLeft: '10%',
            paddingRight: 80,
            paddingBottom: 50,
            fontFamily: "Public Sans",
            justifyContent: "flex-start",
            fontSize: 20,
          }:{
            justifyContent: "center",
            textAlign:'center',
            marginBottom:20
          }}>
          <a className="title col-md-auto  hover-underline-animation">TẤT CẢ</a>
          <a className="title col-md-auto hover-underline-animation">CÁ NHÂN</a>
          <a className="title col-md-auto hover-underline-animation">DOANH NGHIỆP</a>
          <a className="title col-md-auto hover-underline-animation">TÙY CHỌN</a>
        </div>
        {/* Card holder */}
  
        <div className="row "
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            marginBottom: 50
          }}>
        
          <div className="col col-prod text-center" >   
           <a href="/card_1">
            <Fade duration={4000}>
            <div className="card border-0  align-items-center" >
              <img className="card-img-top object-fit-cover row" src="https://img.freepik.com/free-vector/abstract-business-card-template_23-2147965210.jpg?w=740&t=st=1691922685~exp=1691923285~hmac=ca43938ee5c8dbf6f8ef2e263bc6f876676ab9ac9dd441e8fbaf2ad05cc72925" alt="Card image cap"
                style={{
                  width: 320,
                  height: 320
                }} />
              <h3 className="card-title product-title">CARD 1</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG THẺ NHỰA
            </h6>
              <p className="card-text row">
                Thiết kế sang trọng, tinh tế, mang lại cảm giác tự tin và công nghệ mỗi khi trao đổi thông tin với đối tác
              </p>
              <p className='product-price row'>199.000</p>
            </div>
            </Fade></a>
          </div>

          <div className="col col-prod text-center ">
            <Fade duration={4000}>

            <div className="card border-0 align-items-center" >
              <img className="card-img-top object-fit-cover row" src="https://img.freepik.com/premium-psd/luxury-business-card-mockup-psd-pink-tone-with-front-rear_53876-123573.jpg?size=626&ext=jpg" alt="Card image cap"
                style={{
                  width: 320,
                  height: 320
                }} />

              <h3 className="card-title product-title row">CARD 2</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG KIM LOẠI
            </h6>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            ></h6>
              <p className="card-text row">
                Thiết kế nhẹ nhàng, phù hợp cho lúc đi chơi với gia đình, bạn bè
              </p>
              <p className='product-price row'>199.000</p>
            </div></Fade>
          </div>

          <div className="col  text-center">

<Fade duration={4000}>
            <div className="card border-0 align-items-center" >
              <img className="card-img-top object-fit-cover row" src="https://img.freepik.com/free-vector/modern-business-card-template-with-geometric-shapes_23-2147965214.jpg?size=626&ext=jpg" alt="Card image cap"
                style={{
                  width: 320,
                  height: 320
                }} />

              <h3 className="card-title product-title row">CARD 3</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG THẺ NHỰA
            </h6>
              <p className="card-text row">
                Thiết kế sang trọng, tinh tế, mang lại cảm giác tự tin và công nghệ mỗi khi trao đổi thông tin với đối tác
              </p>
              <p className='product-price row'>199.000</p>
            </div>
</Fade>
          </div>
        </div>

        <div className="row "
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            marginBottom: 50
          }}>
          <div className="col col-prod text-center" >
            <Fade duration={4000}>

            <div className="card border-0  align-items-center" >
              <img className="card-img-top object-fit-cover row" src="https://img.freepik.com/free-vector/abstract-business-card-template_23-2147965210.jpg?w=740&t=st=1691922685~exp=1691923285~hmac=ca43938ee5c8dbf6f8ef2e263bc6f876676ab9ac9dd441e8fbaf2ad05cc72925" alt="Card image cap"
                style={{
                  width: 320,
                  height: 320
                }} />

              <h3 className="card-title product-title row">CARD 1</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG THẺ NHỰA
            </h6>
              <p className="card-text row">
                Thiết kế sang trọng, tinh tế, mang lại cảm giác tự tin và công nghệ mỗi khi trao đổi thông tin với đối tác
              </p>
              <p className='product-price row'>199.000</p>
            </div></Fade>
          </div>

          <div className="col col-prod text-center ">
<Fade duration={4000}>
            <div className="card border-0 align-items-center" >
              <img className="card-img-top object-fit-cover row" src="https://img.freepik.com/premium-psd/luxury-business-card-mockup-psd-pink-tone-with-front-rear_53876-123573.jpg?size=626&ext=jpg" alt="Card image cap"
                style={{
                  width: 320,
                  height: 320
                }} />

              <h3 className="card-title product-title row">CARD 2</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG THẺ NHỰA
            </h6>
              <p className="card-text row">
                Thiết kế nhẹ nhàng, phù hợp cho lúc đi chơi với gia đình, bạn bè
              </p>
              <p className='product-price row'>199.000</p>
            </div></Fade>
          </div>

          <div className="col  text-center">
<Fade duration={4000}>
            <div className="card border-0 align-items-center" >
              <img className="card-img-top object-fit-cover row" src="https://img.freepik.com/free-vector/modern-business-card-template-with-geometric-shapes_23-2147965214.jpg?size=626&ext=jpg" alt="Card image cap"
                style={{
                  width: 320,
                  height: 320
                }} />

              <h3 className="card-title product-title row">CARD 3</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG THẺ NHỰA
            </h6>
              <p className="card-text row">
                Thiết kế sang trọng, tinh tế, mang lại cảm giác tự tin và công nghệ mỗi khi trao đổi thông tin với đối tác
              </p>
              <p className='product-price row'>199.000</p>
            </div></Fade>

          </div>
        </div>
        <div className="row justify-content-center"
        style={widthDevice<800 ?{
          display:'block'
        }
        :{ paddingLeft: '10%',
            paddingRight: '10%',}
          }
         >
          <div className="col col-prod text-center" >
            <Fade duration={4000}>

            <div className="card border-0  align-items-center" >
              <img className="card-img-top object-fit-cover row" src="https://img.freepik.com/free-vector/abstract-business-card-template_23-2147965210.jpg?w=740&t=st=1691922685~exp=1691923285~hmac=ca43938ee5c8dbf6f8ef2e263bc6f876676ab9ac9dd441e8fbaf2ad05cc72925" alt="Card image cap"
                style={{
                  width: 320,
                  height: 320
                }} />

              <h3 className="card-title product-title row">CARD 1</h3>
              <h6
              style={{
                fontFamily: 'Public Sans',
              }}
            >
              DẠNG THẺ NHỰA
            </h6>
              <p className="card-text row">
                Thiết kế sang trọng, tinh tế, mang lại cảm giác tự tin và công nghệ mỗi khi trao đổi thông tin với đối tác
              </p>
              <p className='product-price row'>199.000</p>
            </div></Fade>
          </div>

          <div className="col col-prod text-center "
          >
            </div>

          <div className="col  text-center"
          >
  
          </div>
        </div>
       <Form />

        <Footer />
      </div >
    </>
  )
}
