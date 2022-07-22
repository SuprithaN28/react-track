import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../../Data";
import classes from "./Cart.module.css";

const Cart = ({ cartList, setCartList, total, setTotal }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/checkout`;
    navigate(path, { state: { cartList, total } });
  };

  const param = useParams();
  const singleCourse = Data.find((course) => course.id === param.courseid);
  // cartlist.set(singleCourse.id, singleCourse);
  //  console.log(singleCourse.id);
  //const exist = cartList.find((x) => x.id === singleCourse.id);
  // setCartList(
  //   cartList.map((item) => (item.id === singleCourse.id ? { ...exist } : x))
  // );
  //setCartList([...cartList, singleCourse]);
  //setCartList((cartList) => [...cartList, singleCourse]);
  //  console.log(singleCourse);

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.header}>
          <div>Your cart details</div>
        </div>

        <div>
          {cartList.length ? (
            cartList.map((item) => (
              <div className={classes.carditem} key={item.id}>
                <div className={classes.box}></div>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.price}>
                  {item.discounted_price
                    ? item.discounted_price
                    : item.actual_price}
                </div>
              </div>
            ))
          ) : (
            <div className={classes.list}>Cart is Empty</div>
          )}
        </div>
      </div>

      <div>
        <div className={classes.footer}>
          <div className={classes.price}>Total cart value</div>
          <div className={classes.pricers}>Rs {total}/-</div>
        </div>
        <div className={classes.checkoutbtn}>
          <button
            className={classes.checkout}
            onClick={(e) => {
              if (cartList.length === 0) {
                alert(
                  "Your cart is empty.Please add the courses before checkout"
                );
              } else {
                routeChange();
              }
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
