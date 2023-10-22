import React from 'react';
import '../App.css';
import 'animate.css/animate.min.css';
import Lottie from 'lottie-react';
import animationData from '../assest/animation.json';
import animationData2 from '../assest/animation2.json';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Form from '../component/Form';
import { Fade } from "react-awesome-reveal";
import LivingRoomPic from '../assest/z4789498449283_c248779711b8f486c5e2bb22deb1c1bd.jpg';
import LivingRoomPic2 from '../assest/z4789498840758_d4f6411cd73176cf0d3b03c1077d8212.jpg';
import BedRoomPic from '../assest/z4789498737744_9960237149d403ae37ef7693101a9126.jpg';
import Furniture from '../assest/z4789498162523_88b0bbddc75825da36c80c8d64d5bd8d.jpg'
import ChinhDung from '../assest/DSCF8872.jpg';
import Tham from '../assest/tham.jpg'
import JaggerDecor from '../assest/JagerDecor.jpg';
import JaggerHome from '../assest/JagerHome.jpg';
import Furniture2 from '../assest/noithat-cut.jpg'
import Light from '../assest/light.jpg'
import Tham1 from '../assest/tham1.jpg'
import Tham2 from '../assest/tham2.jpg'
import LamViec from '../assest/lamviec.jpg'
import Bep from '../assest/bep-cut.jpg'
import NTKXuanChinh from '../assest/DSCF8880 (1).jpg'
import ChenDia from '../assest/ChenDia.jpg'
import DenChum from '../assest/denchum.jpg'
import Tranh from '../assest/Tranh.jpg'
import Tranh1 from '../assest/Tranh1.jpg'
export default function Contents() {
  const widthDevice = window.innerWidth;

  return (
    <div className="container-fluid" style={{ backgroundColor: '#000', padding: 0 }}>
      {/* Slide show */}
      <div id="carouselExampleIndicators" className="carousel slide border-bottom" data-ride="carousel">
        <div className="carousel-inner container-fluid" style={{ padding: 0 }}>
          <div className="carousel-item active">
            <img className="d-block w-100 h-80 object-fit-cover" src={LivingRoomPic} alt="First slide" style={{ height: 720 }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 object-fit-cover" src={BedRoomPic} alt="Second slide" style={{ height: 720}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 object-fit-cover" src={LivingRoomPic2} alt="Third slide" style={{ height: 720 }} />
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


      <div className="row container-fluid" style={{ backgroundColor: '#000' }}>
        <div className="col-6 overflow-hidden"
        style={{ height: 720 }}
        >
          <img src={ChinhDung} alt="" className="object-fit-cover img-hover" style={{ height: 720 ,width:'100%'}} />
        </div>
        <div className="col-6 overflow-hidden"
        style={{ height: 720 }}>
          <img src={Bep} alt="" className="object-fit-cover img-hover" style={{ height: 720 ,width:'100%' }} />
        </div>
      </div>
      <div className="building "
      style={{
        backgroundColor:'#fff'
      }}>
        <div className="building-header text-center">
          <h1
          style={{
            fontWeight:600,

          }}>
            CÔNG TRÌNH
          </h1>
          <a className=''> Xem tất cả</a>
        </div>
        <div className="row justify-content-center "
        style={{
          paddingBottom:30,
        }}>
        <div className=" flex col-9   "
        >
          <img src={LivingRoomPic} className='object-fit-cover w-100' alt="" />
        </div>
        <span className='text-center'
        style={{
          marginTop:30,
          marginBottom:0
        }}>
        <p className='d-block '>GENTLEMAN HOME</p></span>
      </div>
</div>

<div className="row container-fluid" style={{ backgroundColor: '#000' }}>
        <div className="col-6 overflow-hidden"
       
        >
          <img src={Furniture2} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
        <div className="col-3 overflow-hidden"
      >
          <img src={Tham1} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
        <div className="col-3 overflow-hidden"
      >
          <img src={DenChum} alt="" className="object-fit-cover img-hover" style={{ height: 660 }} />
        </div>
      </div>

      
<div className="row container-fluid" style={{ backgroundColor: '#000' }}>
  
        <div className="col-3 overflow-hidden"
      >
          <img src={ChenDia} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
        <div className="col-3 overflow-hidden"
        style={{}}
      >
          <img src={Tranh1} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>


      <div className="col-6 overflow-hidden"
        >
          <img src={Furniture} alt="" className="object-fit-cover img-hover" style={{ height: 660 ,width:'100%'}} />
        </div>
      </div>
    </div>

  );
}
