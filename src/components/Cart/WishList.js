import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CourseFilter from "../Courses/CourseFilter";
import CourseItem from "../Courses/CourseItem";
import Header from "../home/Header";
import classes from "./WishList.module.css";
import { Data } from "../../Data";

const WishList = () => {
  // { route }
  // const { state } = useLocation();
  // const { wishList } = state;
  // console.log(wishList);
  // const [localWishList, setLocalWishList] = useState(0);
  const recommendation = Data.slice(0, 3);
  return (
    <div>
      <div className={classes.home}>
        <Header />
        <div className={classes.tab}>
          <div className={classes.sort}>
            <div className={classes.allcourse}>My WishList</div>
            <CourseFilter
            //   selected={filteredCourse}
            //   onChangeFilter={filterChangeHandler}
            />
          </div>
          <div className={classes.search}>
            <input type="search" placeholder="Search Here" />

            <button className={classes.searchbtn}>
              <img
                className={classes.searchimg}
                src="/search.png"
                alt="search"
              />
            </button>
          </div>
        </div>
        <div className={classes.course}>
          <div className={classes.courselist}>
            {recommendation.length &&
              recommendation.map((item, index) => {
                return (
                  <CourseItem course={item} key={item.id} />
                  // course={item}
                  // key={item.id}
                  // wishList={wishList}
                  // setWishList={setWishList}
                );

                // return (
                //   <CourseFilter
                //     selected={filteredCourse}
                //     onChangeFilter={filterChangeHandler}
                //   />
                // );
              })}
          </div>
          {/* <div className={classes.cartitems}>
            <Cart  />
          </div>   */}
        </div>
      </div>
    </div>
  );
};

export default WishList;
