import './Center.css'
import { useState } from 'react';
import { Data3 } from './NavbarContent'
import { Data4 } from './NavbarContent';
import { Data5 } from './NavbarContent';
import { Data6 } from './NavbarContent';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Center = () => {
  const [activeCategory, setActiveCategory] = useState("Earbuds");
  const location = useLocation(); // Get current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]); // Run when location changes

  const handleButtonClick = (categoryName) => {
    console.log(`Button clicked: ${categoryName}`);
    setActiveCategory(categoryName);

    // Select all buttons with the class "arpit"
    const buttons = document.querySelectorAll('.arpit');

    // Loop through each button and reset styles
    buttons.forEach((button) => {
      if (button.innerText === categoryName) {
        // Apply selected styles to the clicked button
        button.style.backgroundColor = "blueviolet";
        button.style.color = "white";
      } else {
        // Reset styles for non-selected buttons
        button.style.backgroundColor = "";
        button.style.color = "";
      }
    });
  };

  console.log(`Active category: ${activeCategory}`);

  return (
    <>
      <div
        className="deal-of-day"
        style={{
          marginLeft: "25px",
          marginRight: "25px",
          position: "relative",
        }}
      >
        <Link to={`/products/Allproduct`} className="nav-link no-underline"
          style={{ textDecoration: "none", color: "blueviolet" }}
        >
          <img
            src="/images/image.png"
            alt="Deal of the Day"
            style={{
              // height: "600px",
              width: "100%",
              textAlign: "center",
              borderRadius: "50px",
              marginTop: "40px",
            }}
          />
        </Link>
        <div
          className="shop-now1"
          style={{
            position: "absolute",
            bottom: "10px", // Place it 10px above the bottom edge
            right: "20px", // Place it 20px away from the right edge
          }}
        >
          <Link to={`/products/Allproduct`} className="nav-link no-underline"
            style={{ textDecoration: "none", color: "blueviolet" }}
          >
            <p style={{ color: "black", fontWeight: 700 }}>Shop Now &gt;</p>
          </Link>
        </div>
      </div>

      <div className="inner-html">
        {
          Data3.map((item, index) => (
            <div className="inner-html-1" key={index}>
              <div className="innerhtml2">
                <div className="innerhtml-img">
                  <Link to={item.link} className="nav-link no-underline"
                    style={{ textDecoration: "none", color: "blueviolet" }}
                  >
                    <img src={item.img} alt="#" style={{ backgroundColor: "" }} />
                  </Link>
                  <div className="item-price">
                    <div className="name">
                      <p>{item.Name}</p>
                      <div className="price">
                        <p>{item.discountprice}</p>
                        <p className="discount-price">{item.originalprice}</p>
                        <div className='line4'></div>
                      </div>
                    </div>
                    <div className="isavailable">
                      <div className="find">
                        <Link to={`${item.link}`} className="nav-link no-underline"
                          style={{ textDecoration: "none", color: "blueviolet" }}
                        >
                          <button>
                            {item.hasavailable ? "BUY" : "SOLD"}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="center-lower-part">
        <img src="https://www.wingslifestyle.in/cdn/shop/files/Pro.jpg?v=1710912609" alt="#" />
      </div>
      <div className="shop-now2" style={{ position: "absolute", }}>
        <a href="/products/Allproduct" style={{ textDecoration: "none", color: "black", fontWeight: 700 }}>
          <p style={{}}>Shop Now</p>
        </a>
      </div>

      <div className="search-by-categories">
        <div className="heading">
          <h1>Search by Categories</h1>
        </div>
        <div className="search-by-categories-container">
          {
            Data4.map((item, index) => (
              <div className={`search-by-categories-innerpart`} key={index}>
                <div className="search-by-categories-img">
                  <Link to={`/products/${item.name1}`} className="nav-link no-underline"
                    style={{ textDecoration: "none", color: "blueviolet" }}
                  >
                    <img src={item.img} alt="" style={{ height: "300px", width: "320px", marginRight: "20px", filter: "saturate(0.5)" }} />
                  </Link>
                </div>
                <div className="search-by-categories-name">
                  <p>{item.name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="latest-container">
        {/* Left Image Container */}
        <div className="left-image-container">
          <Link
            to="/products/Headphone"
            className="nav-link no-underline"
            style={{ textDecoration: "none", color: "blueviolet" }}
          >
            <img
              src="https://www.wingslifestyle.in/cdn/shop/files/Group_411.png?v=1707914760"
              alt="Headphones"
              style={{
                height: "385px",
                width: "280px",
                borderRadius: "25px",
                marginTop: "10px",
                marginRight: "15px",
              }}
            />
          </Link>
          <div className="search-by-categories-name">
            <p style={{ textDecoration: "none" }}>Headphones</p>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="right-image-container">
          {/* Upper Section */}
          <div className="right-image-upper">
            <div className="right-image-upper-left">
              <Link
                to="/products/Soundbars"
                className="nav-link no-underline"
                style={{ textDecoration: "none", color: "blueviolet" }}
              >
                <img
                  src="//www.wingslifestyle.in/cdn/shop/files/Group_413.png?v=1707914760"
                  alt="Speakers"
                  style={{
                    height: "185px",
                    width: "400px",
                    borderRadius: "25px",
                    marginTop: "10px",
                    marginRight: "15px",
                  }}
                />
              </Link>
              <div className="search-by-categories-name1">
                <p style={{ textDecoration: "none" }}>Speakers</p>
              </div>
            </div>

            <div className="right-image-upper-right">
              <Link
                to="/products/Accessories"
                className="nav-link no-underline"
                style={{ textDecoration: "none", color: "blueviolet" }}
              >
                <img
                  src="//www.wingslifestyle.in/cdn/shop/files/Group_414.png?v=1707914760"
                  alt="Accessories"
                  style={{
                    height: "185px",
                    width: "640px",
                    borderRadius: "25px",
                    marginTop: "10px",
                    marginRight: "15px",
                  }}
                />
              </Link>
              <div className="search-by-categories-name2">
                <p style={{ textDecoration: "none" }}>Accessories</p>
              </div>
            </div>
          </div>

          {/* Lower Section */}
          <div className="right-image-down">
            <div className="right-image-down-left">
              <Link
                to="/products/Soundbars"
                className="nav-link no-underline"
                style={{ textDecoration: "none", color: "blueviolet" }}
              >
                <img
                  src="//www.wingslifestyle.in/cdn/shop/files/Group_412.png?v=1707914761"
                  alt="Soundbars"
                  style={{
                    height: "187px",
                    width: "630px",
                    borderRadius: "25px",
                    marginTop: "20px",
                    marginRight: "15px",
                  }}
                />
              </Link>
              <div className="search-by-categories-name2">
                <p style={{ textDecoration: "none" }}>Soundbars</p>
              </div>
            </div>

            <div className="right-image-down-right">
              <Link to={`/products/Allproduct`} className="nav-link no-underline"
                style={{ textDecoration: "none", color: "blueviolet" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9dinxVZkHEDhA2UVy6RjGP0Z43brXR7WLA&s"
                  alt="View All"
                  style={{
                    height: "187px",
                    width: "410px",
                    borderRadius: "25px",
                    marginTop: "20px",
                    marginRight: "15px",
                  }}
                />
              </Link>
              <div className="search-by-categories-name4">
                <Link to={`/products/Allproduct`} className="nav-link no-underline"
                  style={{ textDecoration: "none", color: "blueviolet" }}
                >
                  <p style={{ textAlign: "center" }}>View All</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-launches">
        <div className="heading1">
          <h1>New Launches</h1>
        </div>
        <div className="view-All">
          <Link to={`/products/Allproduct`} className="nav-link no-underline"
            style={{ textDecoration: "none", color: "blueviolet" }}
          >
            <p>View all </p>
          </Link>
        </div>
      </div>
      <div className="new-launch-data">
        {
          Data5.map((item, index) => (
            <div className="new-launch-data-inner-img" key={index}>
              <Link to={item.link} className="nav-link no-underline"
                style={{ textDecoration: "none", color: "blueviolet" }}
              >
                <img src={item.img} alt="" style={{ height: "300px", width: "500px", borderRadius: "40px", marginRight: "20px" }} />
              </Link>
            </div>
          ))
        }
      </div>
      <div className="new-launches">
        <div className="heading1">
          <h1>Best Selling</h1>
        </div>
        <div className="view-All">
          <a href="" style={{ textDecoration: "none" }}><p>View all</p></a>
        </div>
      </div>

      <div className="main-container-bestsaling">
        <div className="button-best-saling">
          {
            Data6.map((item, index) => (
              <div className="button-section" key={index}>
                <button onClick={() => handleButtonClick(item.Name)} className='arpit'>{item.Name}
                  {
                    activeCategory == item.Name && (
                      <div className={`best-saling-dropdown-${index}`}>
                        {
                          item.DropdownData.map((item, index) => (
                            <div className={`inner-html-1`} key={index}>

                              <div className="innerhtml-img">
                                <Link to={item.link}><img src={item.img} alt="#" style={{ width: "330px" }} /></Link>
                                <div className="item-price">
                                  <div className="name">
                                    <p>{item.Name}</p>
                                    <div className="price">
                                      <p>{item.discountprice}</p>
                                      <p className="discount-price" style={{ color: "" }}>{item.originalprice}</p>
                                      <div className='line4' style={{ marginLeft: "59px" }}></div>
                                    </div>
                                  </div>
                                  <div className="isavailable">
                                    <div className="find">
                                      <a href={item.link}><button style={{ marginTop: "-20px", marginRight: "-31px", color: "white", border: "1px solid white", width: "142px", background: "blur" }}>
                                        {item.hasavailable === "true" ? "BUY" : "SOLD"}
                                      </button></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    )
                  }
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Center;