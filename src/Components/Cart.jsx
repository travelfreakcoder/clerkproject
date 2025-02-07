import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IconButton } from "@mui/material";
import { decreaseQty, increaseQty, removeFromCart } from "../react-redux/cartSlice";


const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch=useDispatch()

  console.log(cart);

  const subtotal = cart.map((item) => item.price * item.qty).reduce((a, c) => a + c, 0)
  const shipping = subtotal > 0 ? 50 : 0; // Shipping is 0 if no items are in the cart
  const total = subtotal + shipping;

  

  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shopping Cart</h4>
                <div className="breadcrumb__links">
                  <Link to="/index">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Shopping Cart Section Begin --> */}
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="product__cart__item">
                            <div className="product__cart__item__pic">
                              <img src={item.image} alt="image" style={{height:"150px",width:"150px"}}/>
                            </div>
                            <div className="product__cart__item__text">
                              <h6>{item.title}</h6>
                              <h5>Rs. {item.price}</h5>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <IconButton
                              aria-label="Decrease Quantity"
                              onClick={() => dispatch(decreaseQty(item.id))}
                            >
                              <ArrowLeftIcon />
                            </IconButton>
                            {item.qty}
                            <IconButton
                              aria-label="Increase Quantity"
                              onClick={() => dispatch(increaseQty(item.id))}
                            >
                              <ArrowRightIcon />
                            </IconButton>
                          </td>
                          <td className="cart__price">
                            Rs. {parseInt(item.price * item.qty)}
                          </td>
                          <td className="cart__close">
                            <IconButton
                              aria-label="delete"
                              onClick={() => dispatch(removeFromCart(item.id))}
                            >
                              <CancelIcon />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/shop">Continue Shopping</Link>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <Link to="#">
                      <i className="fa fa-spinner"></i> Update cart
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>Rs.  {parseInt(subtotal)}</span>
                  </li>
                  <li>
                    Shipping: <span>Rs. {shipping}</span>
                  </li>
                  <li>
                    Total <span>Rs. {parseInt(total)}</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shopping Cart Section End --> */}
    </>
  );
};

export default Cart;

