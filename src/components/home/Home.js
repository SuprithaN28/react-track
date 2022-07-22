import React, { useState } from "react";
import { Data } from "../../Data";

import Cart from "../Cart/Cart";
import CourseFilter from "../Courses/CourseFilter";
import CourseItem from "../Courses/CourseItem";
import Pagination from "../home/Pagination";
import Header from "./Header";

import classes from "./Home.module.css";

const Home = (props) => {
  const [filteredCourse, setFilteredCourse] = useState("Course Price");

  const filterChangeHandler = (order) => {
    setFilteredCourse(order);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <div className={classes.home}>
        <Header />
        <div className={classes.tab}>
          <div className={classes.sort}>
            <div className={classes.allcourse}>All courses</div>
            <CourseFilter
              selected={filteredCourse}
              onChangeFilter={filterChangeHandler}
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
            {currentPosts.map((item, key) => {
              return (
                <CourseItem
                  course={item}
                  key={item.id}
                  cartList={cartList}
                  setCartList={setCartList}
                  isCourseItem={true}
                  setTotal={setTotal}
                />
              );

              // return (
              //   <CourseFilter
              //     selected={filteredCourse}
              //     onChangeFilter={filterChangeHandler}
              //   />
              // );
            })}

            <Pagination
              postPerPage={postPerPage}
              totalPosts={Data.length}
              paginate={paginate}
              className={classes.paginationctr}
            ></Pagination>
          </div>
          <div className={classes.cartitems}>
            <Cart cartList={cartList} setCartList={setCartList} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
