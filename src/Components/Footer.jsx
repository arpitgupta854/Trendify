import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
     <>
     <div className="footer-section">
    <div className="footer-upper-section">
       <div className="footer-upper-left">
           <h1>Sign up to receive deals and discounts right in your inbox.</h1>
       </div>
       <div className="footer-upper-right">
            <input type="text" className="fullname1" placeholder='Full Name'/>

            <div className="join">
            <input type="text" className="fullname2" placeholder='webstribe@wings.com'/>   
            <button>Join</button>  
            </div>

       </div>
    </div>
    <div className="footer-lower-section">
          <div className="footer-lower-section-img">
            <img src="https://www.wingslifestyle.in/cdn/shop/files/Group_353_150x.png?v=1707715989" alt="" />
          </div>
          <div className="footer-lower-section-should-buy">
             <p style={{fontWeight:"800"}}>Stuff You Should Buy</p>
             <li>Earbuds</li>
             <li>Smartwatches</li>
             <li>Speakers</li>
             <li>Soundbars</li>
             <li>Accessories</li>
          </div>
          <div className="footer-lower-section-should-know">
             <p style={{fontWeight:"800"}}>Stuff You Should Know</p>
             <li>Refund & Replacement</li>
             <li>User Manual/Drivers</li>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Our Blog</li>
          </div>
    </div>
</div>

     </>
  )
}

export default Footer