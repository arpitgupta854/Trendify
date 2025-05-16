import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CheckoutPage.css';
import UpperNavbar from './UpperNavbar';
const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <h2>No product found</h2>;
  }

  const placeOrder = () => {
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "OK"
    }).then(() => {
      navigate('/'); // Redirect to home after order
    });
  };

  return (
    <>
     <UpperNavbar bgColor="black" bgColor2="white" />
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-details">
        <img src={product.img1} alt={product.Name} className="checkout-image" />
        <div>
          <h3>{product.Name}</h3>
          <p><b>Price:</b> {product.Discountprice}</p>
        </div>
      </div>

      <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
    </div>
    </>
  );
};

export default CheckoutPage;
