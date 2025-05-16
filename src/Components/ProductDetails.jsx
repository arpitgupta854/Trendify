import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "./Product"; 
import "./ProductDetails.css";
import UpperNavbar from "./UpperNavbar";
import Footer from "./Footer";

const ProductDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  // Find the selected category and product
  const selectedCategory = Product.find(p => p.category === category);
  const selectedProduct = selectedCategory
    ? selectedCategory.Data1.find(item => item.id === id)
    : null;

  if (!selectedProduct) {
    return <h2>Product not found</h2>;
  }

  const handleBuyNow = () => {
    if (selectedProduct.hasavailable) {
      navigate("/checkout", { state: { product: selectedProduct } });
    }
  };

  return (
    <>
    <UpperNavbar bgColor="black" bgColor2="white" />
      <div className="container">
        <div className="upper-section">
          <div className="inner-images">
            <img src={selectedProduct.img1} alt="" />
            <img src={selectedProduct.img2} alt="" />
            <img src={selectedProduct.img3} alt="" />
            <img src={selectedProduct.img4} alt="" />
          </div>
          <div className="images">
            <img src={selectedProduct.img1} alt="" />
          </div>
          <div className="product-description">
            <div className="product-Name">
              <p>{selectedProduct.Name}</p>
            </div>
            <div className="price1">
              <p style={{marginLeft:"20px",marginRight:"10px"}}>{selectedProduct.Discountprice}</p>
              <p style={{ textDecoration: "line-through" }}>
                {selectedProduct.Originalprice}
              </p>
            </div>
            <div className="payment-img" style={{marginTop:"20px"}}>
                <img src='/images/payment.png' alt="" style={{width:"600px"}}/>
            </div>
            <button
              onClick={handleBuyNow}
              style={{
                backgroundColor: selectedProduct.hasavailable ? "green" : "gray",
                color: "white",
                cursor: selectedProduct.hasavailable ? "pointer" : "not-allowed",
                width: "600px",
                height: "50px",
                fontSize: "2rem",
                marginTop: "20px",
              }}
            >
              {selectedProduct.hasavailable ? "Buy" : "Sold"}
            </button>
          </div>
        </div>
      </div>

      <div className="product-container">
              <div className="inner-product-container">
            <img src="https://www.wingslifestyle.in/cdn/shop/files/Frame_323.png?v=1707477721" alt="" style={{width:"150px",height:"150px",marginRight:"40px"}}/>
            <img src="https://www.wingslifestyle.in/cdn/shop/files/Frame_325.png?v=1707477850" alt="" style={{width:"150px",height:"150px",marginRight:"40px"}}/>
            <img src="https://www.wingslifestyle.in/cdn/shop/files/Frame_324.png?v=1707477902" alt="" style={{width:"150px",height:"150px",marginRight:"40px"}} />
            <img src="https://www.wingslifestyle.in/cdn/shop/files/Frame_326.png?v=1707477945" alt="" style={{width:"150px",height:"150px",marginRight:"40px"}} />
              </div>
        </div>
        <div className="button1">
        <button style={{width:"600px",height:"50px",fontSize:"2rem",marginTop:"20px" ,backgroundColor:"blueviolet",borderRadius:"15px",color:"white",fontWeight:"700",fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",border:"none",textAlign:"center",justifyContent:"center",marginTop:"30px"}}>
               Product Images
            </button>
            </div>
    <div className="product-image">
            <img src={selectedProduct.img2} alt="" style={{width:"1100px",height:"700px",borderRadius:"12px",marginBottom:"5px"}} />
            <img src={selectedProduct.img3} alt=""  style={{width:"1100px",height:"700px",borderRadius:"12px",marginBottom:"5px"}} />
            <img src={selectedProduct.img4} alt=""  style={{width:"1100px",height:"700px",borderRadius:"12px",marginBottom:"5px"}}/>
        </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
