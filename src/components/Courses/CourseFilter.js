import React from "react";
import { useState } from "react";
import { Data } from "../../Data";
import CourseItem from "./CourseItem";

const CourseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  // const sortCourses = (Data, asc) => {
  //   return Data.sort((dataA, dataB) => {
  //     if (asc) {
  //       return dataA.discounted_price > dataB.discounted_price ? 1 : -1;
  //     } else {
  //       return dataA.discounted_price < dataB.discounted_price ? 1 : -1;
  //     }
  //   });
  // };

  // let priceContent = sortCourses.map((course) => (
  //   <CourseItem course={course} />
  // ));

  return (
    <div>
      <div>
        <div>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="">Course price</option>
            <option value="asc">Low to High</option>
            <option value="dec">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
