import React from 'react'

export default function Footer() {
  return (
    <div className=''
    style={{
      backgroundColor: "#121212" ,
      marginTop: "10px"
    }
    }>
      <>
        {/* Footer */}
        <footer className=" text-center text-lg-start bg-light text-muted"
        style={{
          backgroundColor:'#121212',
          color:'#12121',
          padding:0
        }}>
            <div className="container-fluid text-center text-md-start "
            style={{
              padding:0,
            }}
            >
              {/* Grid row */}
              <div className="row ">
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pt-20">
                  <h6 className="text-uppercase fw-bold mb-4 "
                  style={{
                    paddingTop:20,
                  }}>Chính sách của chúng tôi</h6>
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="/policy" className="text-reset text-decoration-none">
                    Chính sách bảo mật
                    </a>
                  </p>

                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/bo-sp-vong-tay-y-te" className="text-reset text-decoration-none">
                    Điều khoản dịch vụ
                    </a>
                  </p>
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/cong-nghe-khac" className="text-reset text-decoration-none">
                    Chính sách vận chuyển, hoàn trả và hoàn tiền
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4"
                   style={{
                    paddingTop:20,
                  }}>Địa điểm của chúng tôi</h6>
                
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
          
                    <a href="https://www.vlaser.vn/bo-giai-phap-the-id" className="text-reset text-decoration-none">
                    Email: marketing@griffycard.com
                    </a>
                  </p >

                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/bo-sp-vong-tay-y-te" className="text-reset text-decoration-none">
                    Phone: +603-2779 1443
                    </a>
                  </p>
                  <p style={{
                    marginBottom: 15,
                    fontSize:18,
                  }}>
                    <a href="https://www.vlaser.vn/cong-nghe-khac" className="text-reset text-decoration-none">
                    Address: 02-15, Skyawani 2, No. 1A Jalan 2/12 Kg Batu Muda 51100 Kuala Lumpur
                    </a>
                  </p>
                 

                </div>
                {/* Grid column */}
                {/* Grid column */}
                
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
        
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center"
            style={{ backgroundColor: "#121212",    color:'#ffffff', padding:40,}}
          >
            Website thuộc bản quyền sở hữu trí tuệ của
            <   a className="text-reset fw-bold" href="https://995ht.vn/#/login/">
              HT Card
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </>
    </div>
  )
}
    