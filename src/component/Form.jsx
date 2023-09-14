import React from 'react'
import { Fade } from 'react-awesome-reveal'
export default function 
() {
  return (
    <div>
         <div className="col container-fluid object-fit-cover "
          style={{
            backgroundImage: 'URL(https://img.freepik.com/free-vector/wave-textures-white-background-vector_53876-60287.jpg?w=1380&t=st=1694383544~exp=1694384144~hmac=f43062badd11f53cff89955f0a36213bca316e9698ac035eaab31cd9d5ea6b91',
            backgroundSize: 'cover',
          }}>
          <div className="wrapper "
            style={{
              padding: 30,
            }}>
            <div className="row justify-content-center text-center"
              style={{
                marginTop: 80, 
                  marginLeft:'25%',
                  marginRight:'25%',
              }}>
              <Fade duration={2500} direction='down'>
              <h2 className='animate__fadeInDown animate__delay-2s animate__infinite'
                style={{
                  fontFamily: "Blacker",
                  fontSize: 36,
                  marginBottom: 50,
                  color: '#112A46',      

                }}>VUI LÒNG ĐIỀN THÔNG TIN ĐỂ NHẬN TƯ VẤN THÊM</h2>
          </Fade>
       
            </div>
            <div className="row justify-content-center border-0">
             
             <input type="email" placeholder="EMAIL" className='' 
             style={{
              width:'33%',
              height:44,
              background:'none',
              color: '#112A46',
              marginBottom: 80,
              borderBottom:'1px solid',
              borderLeft: 0,
              borderTop:0,
              borderRight:0,
              borderColor:'#112A46',
             }}/>
            
            </div>
          </div>
        </div>
    </div>
  )
}
