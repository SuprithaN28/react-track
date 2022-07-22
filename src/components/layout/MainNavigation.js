import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/checkout`;
    navigate(path);
  };
  const routeProfile = () => {
    let path = `/profile`;
    navigate(path);
  };
  return (
    <header className={classes.nav}>
      <img className={classes.logo} src="/Logo.png" />
      <nav className={classes.course}>
        <ul>
          <li className={classes.courses}>
            <Link to="/">Courses</Link>
          </li>

          <li className={classes.wishlist}>
            <Link to="/wishlist">My WishList</Link>
          </li>
          <li>
            <img
              src="/cart.png"
              className={classes.headerimg}
              //onClick={routeChange}
            ></img>
          </li>
          <li>
            <img src="/profile.png" onClick={routeProfile}></img>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
