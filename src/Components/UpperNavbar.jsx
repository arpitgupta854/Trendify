import React, { useState } from 'react';
import './UpperNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Data } from './NavbarContent';
import { Link } from 'react-router-dom';

const UpperNavbar = ({bgColor="white"}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseOver = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseOut = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="first-order">
        <h2>10% off your first purchase! Code: FIRSTORDER</h2>
      </div>
      <div className="Navbar" style={{backgroundColor:bgColor,zIndex:"10"}}>
        <Link  to ="/" style={{textDecoration:"none"}}>

        <div className="Navbar-logo">
          <img
            src="	https://www.wingslifestyle.in/cdn/shop/files/Group_353_150x.png?v=1707715989"
            alt="Logo"
            style={{ backgroundColor: "blueviolet",borderRadius:"50%",zIndex:"9999" }}
          />
        </div>
        </Link>
        <ul className="nav-items" style={{marginTop:"18px",fontSize:"16px",color:"blueviolet"}}>
          {Data.map((item, index) => (
            <li
              key={index}
              className={`nav-item nav-item-${index}`}
              onClick={() => handleDropdownToggle(index)}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
            <Link to={`/products/${item.Name}`} className="nav-link no-underline"
              style={{ textDecoration: "none",color:"blueviolet", }}
            >{item.Name}</Link>

              {activeDropdown === index && (
                <div
                  className={`dropdown-${index} ${
                    item.Name === "Support" ? "dropdown-row" : "dropdown-column"
                  }`}
                >
                  {item.DropdownData &&
                    item.DropdownData.map((dropdownItem, dropdownIndex) => {
                      // Check if it's the last item in the dropdown list
                      const isLastItem = dropdownIndex === item.DropdownData.length - 1;

                      return (
                        <Link
                          key={dropdownIndex}
                          to={isLastItem ? `/products/${item.Name}` : `/products/${item.Name}/${dropdownItem.id}`}
                          className="dropdown-item"
                        >
                          {dropdownItem.img && (
                            <img
                              src={dropdownItem.img}
                              alt="#"
                              className="dropdown-image"
                            />
                          )}
                          <span className="anshu">{dropdownItem.Name}</span>
                        </Link>
                      );
                    })}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="search-box">
          <div className="search-box-items">
            <input type="text" placeholder="Search..." />
            <div className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="shopping">
            <div className="shopping-icon">
              <FontAwesomeIcon icon={faCartShopping} className="icon" />
            </div>
            <div className="item-added">
              <p>0</p>
            </div>
          </div>
          <div className="user">
            <a href="https://example.com/user-profile">
              <FontAwesomeIcon icon={faUser} className="icon" style={{marginTop:"10px"}}/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperNavbar;
