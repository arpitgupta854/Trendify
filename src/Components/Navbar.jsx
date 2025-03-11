import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Data2 } from './NavbarContent';
import UpperNavbar from './UpperNavbar';
import { Link } from 'react-router-dom';

const images = [
  { src: '/images/img1.png', link: '/products/Accessories/1' },
  { src: '/images/img2.png', link: '/products/Earbuds/1' },
  { src: '/images/img3.png', link: '/' },
  { src: '/images/img4.png', link: '/' },
];

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Function to open modal with selected product index
  const openModal = (index) => {
    setSelectedProductIndex(index);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProductIndex(null);
  };

  // Function to move to the next product in the modal
  const nextProduct = () => {
    setSelectedProductIndex((prevIndex) => (prevIndex + 1) % Data2.length);
  };

  // Function to move to the previous product in the modal
  const prevProduct = () => {
    setSelectedProductIndex((prevIndex) =>
      (prevIndex - 1 + Data2.length) % Data2.length
    );
  };

  return (
    <>
       <UpperNavbar />
      {/* Image Slider */}
      <div className="slider">
        <Link to={images[currentIndex].link}>
          <div
            className="slider-image"
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
          >
          </div>
        </Link>
        <button className="slider-button left" onClick={prevImage}>&#10094;</button>
        <button className="slider-button right" onClick={nextImage}>&#10095;</button>
      </div>

      {/* Product Slideshow */}
      <div className="slide-show">
        <div className="outer-slideshow">
          {Data2.map((item, index) => (
            <div 
              className="outerimg" 
              key={index} 
              onClick={() => openModal(index)} // Open modal on click
            >
              <img src={item.img} alt={item.Name} className="outerimg1" />
              <span>{item.Name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal with Left & Right Navigation */}
      {selectedProductIndex !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close Button */}
            <button className="close-button" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Left Navigation Button */}
            <button className="modal-nav left" onClick={prevProduct}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Product Details */}
            <h2 style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>{Data2[selectedProductIndex].Name}</h2>
            <div className="upper-container1">
            <div className="left-upper-container1">
            <video src={Data2[selectedProductIndex].vid}  loop autoPlay muted className="video-player"></video>
            </div>
            <div className="right-upper-container1">
            <img src={Data2[selectedProductIndex].innerimg} alt={Data2[selectedProductIndex].Name} className="modal-image" />
            <p style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:"10px"}}><b>Original Price:</b> <strike>{Data2[selectedProductIndex].originalprice}</strike></p>
            <p style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:"10px"}}><b>Discount Price:</b> {Data2[selectedProductIndex].discountprice}</p>
            <a href={Data2[selectedProductIndex].link} target="_blank" rel="noopener noreferrer">
              <button className="buy-button">Buy Now</button>
            </a>

            </div>
            </div>
            
            {/* Right Navigation Button */}
            <button className="modal-nav right" onClick={nextProduct}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
