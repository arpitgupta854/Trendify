import React from 'react'
import './Aboutme.css'
import { Data7 } from './NavbarContent';
import { Data8 } from './NavbarContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Aboutme = () => {
  return (
   <>
    <div className="About-us-section">
    <div className="a-img">
        <img src="https://www.wingslifestyle.in/cdn/shop/files/About_Us_d6444454-05e4-47e9-a210-60981085c2fa_1920x.jpg?v=1721211040&quot" alt="" />
        <div className="written-Aboutus-section">
            <h1>About Us</h1>
            <p>Wings is India’s fastest growing lifestyle consumer tech brand, built for young India. We’re on a mission to create a brand that the youth is proud to own, constantly innovating to create premium, feature-rich tech products with stylish, trendy designs.</p>
            <button>Know More</button>
        </div>
    </div>
</div>

<div className="About-us-section">
    <div className="a-img">
        <div className="a-img-1">
        <img src="//www.wingslifestyle.in/cdn/shop/files/Artboard_14_360x.jpg?v=1710743651 360w,//www.wingslifestyle.in/cdn/shop/files/Artboard_14_375x.jpg?v=1710743651 375w,//www.wingslifestyle.in/cdn/shop/files/Artboard_14_414x.jpg?v=1710743651 414w,//www.wingslifestyle.in/cdn/shop/files/Artboard_14_600x.jpg?v=1710743651 600w,//www.wingslifestyle.in/cdn/shop/files/Artboard_14_768x.jpg?v=1710743651 768w,//www.wingslifestyle.in/cdn/shop/files/Artboard_14_810x.jpg?v=1710743651 810w,//www.wingslifestyle.in/cdn/shop/files/Artboard_14_962x.jpg?v=1710743651 962w,//www.wingslifestyle.in/cdn/shop/files/Laptop_About_1024x.jpg?v=1710912943 1024w,//www.wingslifestyle.in/cdn/shop/files/Laptop_About_1280x.jpg?v=1710912943 1280w,//www.wingslifestyle.in/cdn/shop/files/Laptop_About_1366x.jpg?v=1710912943 1366w,//www.wingslifestyle.in/cdn/shop/files/Laptop_About_1440x.jpg?v=1710912943 1440w,//www.wingslifestyle.in/cdn/shop/files/Laptop_About_1536x.jpg?v=1710912943 1536w,//www.wingslifestyle.in/cdn/shop/files/Laptop_About_1440x.jpg?v=1710912943 1440w,//www.wingslifestyle.in/cdn/shop/files/Laptop_About_1920x.jpg?v=1710912943 1920w
" alt="" style={{height:"500px"}} />
        <div className="written-Aboutus-section">
            <h1>Why Choose Nuvobook Laptops?</h1>
            <p>The Nuvobook series is built for young Indians with sleek and vibrant design coupled with specs ideal for every use case - be it general productivity, entertainment, creative pursuits or gaming.</p>
            <button>Know More</button>
        </div>
        </div>
    </div>
</div>




<div className="featured">
        {Data7.map((item, index) => ( 
            <div className="featured-img" key={index}>
                <img src={item.img} alt="#" />
            </div>
        ))}
</div>




<div className="About-us-section">
    <div className="a-img">
       <video autoPlay muted loop><source  src='https://cdn.shopify.com/videos/c/o/v/cbfd59c7246f44ddb5beeee944e35b2b.mp4' type='video/mp4'/></video>
    </div>
</div>

 <div className="social-media">
     <div className="facebook" style={{height:"50px",width:"50px",marginRight:"20px"}}>
     <FontAwesomeIcon icon={faFacebook} style={{height:"50px",width:"50px",marginRight:"20px",color:"blue"}}/>
     </div>
     <div className="instagram" style={{height:"50px",width:"50px",backgroundColor:"#e21a3d",borderRadius:"50%",textAlign:"center",marginRight:"20px"}}>
     <FontAwesomeIcon icon={faInstagram} style={{height:"35px",width:"35px",marginRight:"20px",color:"white",padding:"8px"}}/>
     </div>
     <div className="linkedin" style={{height:"50px",width:"50px",borderRadius:"50%",textAlign:"center",marginRight:"20px"}}>
     <FontAwesomeIcon icon={faLinkedin} style={{height:"50px",width:"50px",marginRight:"20px",color:"#3f29a7",zIndex:"9999",borderRadius:"50%"}} />
     </div>
     <div className="youtube" style={{height:"50px",width:"50px",backgroundColor:"red",borderRadius:"50%",textAlign:"center",marginRight:"20px",padding:"4px"}}>
     <FontAwesomeIcon icon={faYoutube} style={{height:"37px",width:"37px",marginRight:"20px",color:"white",padding:"4px"}}/>
     </div>
     <div className="twitter" style={{height:"50px",width:"50px",marginRight:"20px"}}>
     {/* <FontAwesomeIcon icon={ faXTwitter } style={{height:"50px",width:"50px",marginRight:"20px"}}/> */}
     </div>
 </div>
   </>
  )
}

export default Aboutme