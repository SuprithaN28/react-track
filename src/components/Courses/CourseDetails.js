import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../../Data";
import Header from "../home/Header";
import classes from "./CourseDetails.module.css";

const CourseDetails = (props) => {
  const param = useParams();
  const singleCourse = Data.find((course) => course.id === param.courseid);
  const [wishList, setWishList] = useState([]);

  let navigate = useNavigate();

  const addToWishList = (courseItem) => {
    let found = wishList.find((course) => course.id === courseItem.id);
    if (!found) {
      setWishList([courseItem, ...wishList]);
    } else {
      alert("Item already in wishList..!!");
    }
    navigate("/wishlist", { state: { wishList } });
  };

  return (
    <div className={classes.home}>
      <Header />
      <div className={classes.tab}>
        <div className={classes.sort}>
          <div className={classes.allcourse}>
            All courses &gt; {singleCourse.title}
          </div>
        </div>
      </div>
      <div className={classes.banner}>
        <div className={classes.info}>
          <div className={classes.title}>{singleCourse.title}</div>
          <div className={classes.text}>{singleCourse.description}</div>
          <div className={classes.text}>{singleCourse.author}</div>
          <div className={classes.texttag}>
            {singleCourse.tags.map((i) => {
              return <div className={classes.tags}>{i}</div>;
            })}
          </div>
        </div>
      </div>
      <div className={classes.blocks}>
        <div className={classes.details}>{singleCourse.details}</div>
        <div className={classes.courseDetailsBox}>
          <div className={classes.priceinfo}>
            <div className={classes.pricediscount}>
              {singleCourse.discounted_price && singleCourse.discounted_price}
            </div>
            <div className={classes.price}>
              Rs {singleCourse.actual_price}/-
            </div>
          </div>

          <div className={classes.courseButtons}>
            <button
              className={classes.btn}
              onClick={() => {
                console.log("add to cart", singleCourse);
              }}
            >
              Add to Cart
            </button>
            <button
              className={classes.wishlist}
              onClick={() => {
                addToWishList(singleCourse);
              }}
            >
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
