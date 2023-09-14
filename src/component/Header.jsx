import React from 'react';
import icon_img from '../assest/icon_img.jpg'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (


      <div className=" container-fluid header row m-0 "
      style={{
        margin:0,
        justifyContent:'center',
        display:'flex',
        backgroundColor:'#fff',
      }}>
        <div className="row"
        style={{
          backgroundColor:'#000',
        }}>

          <a href='/product' className='d-flex justify-content-center icon-link icon-link-hover'
          style={{
            padding: 5,
            opacity:'0.6',

            color:'#fff',
            fontWeight:400,
          }}>HOT !!! Khuyến mãi 15% toàn bộ sản phẩm <i className='bi bi-arrow-right-short align-self-center'
          style={{
            fontSize:22,
          }}></i></a>
        </div>
        <nav className="row navbar navbar-light navbar-lg border-bottom"
          style={{
            backgroundColor: '#fff',
            padding:10,
            margin:0,
            justifyContent:'center',
          }}
        >
          <a className="col-md-auto navbar-brand  p-2 " href="#"
            style={{
              display: "flex",
            }}>
            <img
              src={icon_img}
              width={50}
              height={50}
              className="d-inline-block align-top rounded"
              alt=""
              style={{
                marginRight: 1,
              }}
            />
            <h2 style={{
              marginLeft: 5,
              paddingTop: "INHERIT",
              fontSize: 30,
              fontFamily:'Public Sans',
              fontWeight:600,
            }}>HT CARD</h2>
          </a>
          <nav className="navbar col-5 navbar-expand-lg navbar-light"
            style={{
              backgroundColor: '#ffffff',
              fontFamily:'Public Sans',
              fontWeight:400,
              fontSize:20,
            }}
          >
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item  active">
                  <Link to="/homepage" className="nav-link ">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link">
                    Sản phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/instruct">
                    Hướng dẫn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Liên hệ
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
          <div className='col-2 d-flex' 
          style={{
           justifyContent:'flex-end',
          }}>
          <i class="bi bi-header bi-search ml-5"
                /> 
          <a href="https://995ht.vn/login">
          <i class="bi bi-header bi-person"
          style={{
            fontSize:25,
          }}></i>
          </a>
          <a href="/cart">
          <i class="bi bi-header bi-bag"></i> 
          </a>
</div>
        </nav>
      

        </div>


  )
}
