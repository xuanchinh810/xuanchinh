import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import Form from '../component/Form'

export default function Contact() {
  return (
    <div className='container-fluid ' style={{
       
      }}>
        <Header />

        <h3 className='text-center mb-100 mt-40'
      style={{
        marginBottom: 60,
        marginTop: 40,
        fontSize:40,
        
      }}>     Liên hệ</h3>

<div className=" container justify-content-center"
        style={{
          maxWidth: '40%',
          marginBottom:100,
        }}>



              <h5>THÔNG TIN LIÊN HỆ </h5><br />
              <h6 className="text-uppercase fw-bold mb-4">CÔNG TY CỔ PHẦN KHOA HỌC CÔNG NGHỆ VLASER</h6>
                  <div style={{ margin: '0px 0px 10px 0px' }}>
                    <strong style={{ margin: '0px 5px 0px 0px' }}>Văn phòng:</strong>
                    Tầng 14, tòa nhà Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội, Việt Nam
                  </div>

                  <div style={{ margin: '0px 0px 10px 0px' }}>
                    <strong style={{ margin: '0px 5px 0px 0px' }}>Điện thoại:</strong>
                    0243 728 0956
                  </div>

                  <div style={{ margin: '0px 0px 10px 0px' }}>
                    <strong style={{ margin: '0px 5px 0px 0px' }}>Email:</strong>
                    info@vlaser.vn
                  </div>

                  <div style={{ margin: '0px 0px 10px 0px' }}>
                    <strong style={{ margin: '0px 5px 0px 0px' }}>Website:</strong>
                    <a href="https://www.vlaser.vn/" className='text-decoration-none '
                     style={{ color: "rgba(0, 0, 0, 0.6)" }}>vlaser.vn</a>
                  </div>

                  <div className="bg-img">
                    <img src="https://www.vlaser.vn/sites/default/files/logo-vlaser.png" alt="" />
                  </div>


    </div>
        <Form />

        <Footer />
  
  

      </div>
  )
}
