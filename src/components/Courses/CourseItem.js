import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CourseItem.module.css";
import AddedAlert from "../Cart/AddedAlert";

const CourseItem = ({
  course,
  cartList,
  setCartList,
  isCourseItem,
  setTotal,
}) => {
  let navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const routeChange = (courseid, cartList) => {
    let path = `/coursedetail/${course.id}`;
    navigate(path);
  };
  const addToCart = (courseItem) => {
    setPopup(true);
    let found = cartList.find((course) => course.id === courseItem.id);
    if (!found) {
      setCartList([...cartList, course]);
      calculateTotal(courseItem, [...cartList, course]);
    }
  };

  const calculateTotal = (course, cartList) => {
    if (course.discounted_price != null) {
      setTotal(
        (previousTotal) => previousTotal + parseInt(course.discounted_price)
      );
    } else {
      setTotal(
        (previousTotal) => previousTotal + parseInt(course.actual_price)
      );
    }
  };

  return (
    <>
      
      <div className={classes.card}>
        <div className={classes.box}></div>
        <div className={classes.coursename}>
          <div className={classes.coursetitle} onClick={routeChange}>
            {course.title}
          </div>
          {isCourseItem && (
            <div>
              <button className={classes.tags} onClick={routeChange}>
                {course.tags.map((tag, index) => {
                  return (
                    <div className={classes.tags} key={index}>
                      {tag}
                    </div>
                  );
                })}
              </button>

              {popup && <AddedAlert setPopup={setPopup} />}
              {/* <button className={classes.react} onClick={routeChange}>
              React
            </button> */}
            </div>
          )}
        </div>
        <div>{course.author}</div>

        <div>
          <img src="/star.png" className={classes.headerimg} alt="star" />
        </div>

        <div>{course.discounted_price ? course.discounted_price : "-"}</div>
        <div>{course.actual_price}</div>
        <button
          className={classes.btn}
          onClick={() => {
            addToCart(course);
          }}
        >
          Add to Cart
        </button>

        <img
          src="/arrow.png"
          className={classes.headerimg}
          onClick={routeChange}
          alt="arrow"
        />
      </div>
    </>
  );
};

export default CourseItem;
