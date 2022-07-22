import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Data } from "../../Data";
import CourseItem from "../Courses/CourseItem";
import CheckedOut from "./CheckedOut";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = ({ route }) => {
  const { state } = useLocation();
  const { cartList } = state;
  const { total } = state;
  const [localToatal, setLocalTotal] = useState(total);
  const [cartItems, setCartItems] = useState(cartList);
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const deleteCourse = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
    if (product.discounted_price != null) {
      setLocalTotal(
        (previousTotal) => previousTotal - parseInt(product.discounted_price)
      );
    } else {
      setLocalTotal(
        (previousTotal) => previousTotal - parseInt(product.actual_price)
      );
    }
  };
  const recommendation = Data.slice(0, 3);
  const reset = () => {
    setCartItems([]);
    setLocalTotal(0);
    //  navigate("/");
  };

  return (
    <div className={classes.shoppingCartDashboard}>
      <div className={classes.header}>
        <div className={classes.textbox}>
          <img
            src="/header.png"
            className={classes.headerimg}
            alt="header"
          ></img>
          <div className={classes.text}>
            <div>Shopping Cart</div>
          </div>
        </div>
      </div>
      <div className={classes.coursetitle}>
        {cartItems.length} Courses In Cart
      </div>
      <div className={classes.start}>
        <div className={classes.cartDetails}>
          {cartItems.map((item, index) => {
            return (
              <div className={classes.card} key={index}>
                <div className={classes.box}></div>
                <div className={classes.coursename}>
                  <div className={classes.coursetitle}>{item.title}</div>
                </div>
                <div>{item.author}</div>
                <div>Move to wishlist</div>
                <div>
                  {item.discounted_price
                    ? item.discounted_price
                    : item.actual_price}
                </div>
                <button
                  onClick={(e) => {
                    deleteCourse(item);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        {popup && <CheckedOut setPopup={setPopup} />}
        <div className={classes.total}>
       
          <div className={classes.coursetitle}>
            <div>Total Amount</div>
            <div>Rs {localToatal}/-</div>
            {cartItems.length ? (
              <div className={classes.linktext}>You have saved Rs 1080/-</div>
            ) : (
              <div className={classes.linktext}>You have saved Rs 0/-</div>
            )}
          </div>
          <button
            className={classes.btn}
            onClick={(e) => {
              if (cartItems.length === 0) {
                alert(
                  "Your cart is empty.Please add the courses before checkout"
                );
              } else {
                reset();
                setPopup(true);
              }
            }}
          >
            Checkout
          </button>
        </div>
      </div>

      <div className={classes.coursetitle}>Recommended Couses</div>
      <div className={classes.recommended}>
        {recommendation.map((item, index) => {
          return <CourseItem course={item} isCourseItem={false} />;
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;
