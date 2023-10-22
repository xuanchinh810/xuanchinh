import React from 'react';
import icon_img from '../assest/icon_img.jpg'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (

// top
      <div className=" container-fluid header row  "
      style={{
        justifyContent:'center',
        display:'flex',
        backgroundColor:'#000',
      }}>
        <div className="row flex "
        style={{
          color:'#fff',
          marginLeft:'20%',
          fontSize:'12px',
          margin:0,
          fontWeight:600,
        }}>
         <div className='d-flex col-6'
         style={{
          marginLeft:'10%'
         }}
          >
          <p
           style={{
            fontSize:'12px',
            padding:10,
            paddingLeft:0,
            margin:0,
            fontWeight:600,
          }}
        >
            XUÂN CHÍNH INTERIOR DESIGN
          </p>

          <div className='vr align-self-center '></div>
          <p
           style={{
            padding:10,
            margin:0,
            fontWeight:600,
            color:'fff',
            opacity:0.5
          }}>CỬA HÀNG</p>
         </div>
         <div className='col-2'>
          <p
           style={{
          
            padding:10,
            margin:0,
            fontWeight:600,
            color:'fff',
            opacity:0.5
          }}
          >HOTLINE: 012345678</p>
         </div>
        </div>

        {/* line */}
        <div
        style={{
          backgroundColor:'#000'
        }}>
        <hr className='container' /></div>

        {/* bot */}
        <nav className="row"
          style={{ 
           
            backgroundColor: '#000',
            color:'#fff',
            padding:'0',
            margin:0,
       
          }}
        >
          <nav className="navbar col-6 navbar-expand-lg navbar-light"
            style={{
              backgroundColor: '#000',
              marginLeft:'10%',
              fontWeight:400,
              fontSize:20,
              color:'#fff',
            }}>
            <a href="/" className='' style={{
              display: "flex",
              color:'#fff',
            }}>
              <h2 style={{
              margin:0,
              marginRight:20,
              paddingTop: "INHERIT",
              fontSize: 20,
              fontWeight:300,
              letterSpacing:'3px'
            }}>XUÂN CHÍNH</h2>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown"
            >
              <ul className="navbar-nav"
              >
                <li className="nav-item  active ">
                  <Link to="/" className="nav-link ">
                    GIỚI THIỆU
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    CÔNG TRÌNH
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    CỬA HÀNG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    LIÊN HỆ
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
          <div className='col-2 d-flex' 
          style={{
           justifyContent:'flex-end',
          }}>
          <i class="bi bi-header bi-search "
                /> 
        
</div>
        </nav>
      

        </div>


  )
}
