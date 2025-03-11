import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UpperNavbar from './UpperNavbar';
import Footer from './Footer';
import { Product } from './Product';
import './ProductList.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation(); // Get current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]); // Run when location changes
  // Ensure category exists and get the selected category data
  const selectedCategory = Product.find(p => p.category.toLowerCase() === category.toLowerCase());

  return (
    <>
      <UpperNavbar bgColor="black" bgColor2="white" />

      <div className="container">
        {/* Show message if no products exist for the given category */}
        {selectedCategory ? (
          selectedCategory.Data1.map((item) => (
            <div className="inner-container" key={item.id}>

             
              <div className="img1">
                <img src={item.img1} alt={item.Name} />
              </div>

              <div className="itemName">
                <p>{item.Name}</p>
              </div>

             
              <div className="price" style={{marginLeft:"37px"}}>
                <div className="discountprice">
                  <p>{item.Discountprice}</p>
                </div>
                <div className="original-price">
                  <p>{item.Originalprice}</p>
                </div>
                <div className="line2"></div>
              </div>

             
              <Link to={`/products/${category}/${item.id}`} style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    backgroundColor: item.hasavailable ? 'blueviolet' : 'gray',
                    color: 'white',
                    cursor: item.hasavailable ? 'pointer' : 'not-allowed'
                  }}
                  disabled={!item.hasavailable}
                >
                  {item.hasavailable ? 'Buy' : 'Sold'}
                </button>
              </Link>

            </div>
          ))
        ) : (
          <p className="no-products">No products available in this category.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
