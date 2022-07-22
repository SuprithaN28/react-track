import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import ShoppingCart from "./components/Cart/ShoppingCart";
import WishList from "./components/Cart/WishList";
import CourseDetails from "./components/Courses/CourseDetails";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import ProfileForm from "./components/Profile/ProfileForm";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/coursedetail" element={<CourseDetails />} exact></Route>
        <Route
          path="/coursedetail/:courseid"
          exact
          element={<CourseDetails />}
        ></Route>
        <Route path="/checkout" exact element={<ShoppingCart />}></Route>
        <Route path="/wishlist" exact element={<WishList />}></Route>
        <Route path="/profile" element={<ProfileForm />} />
        <Route
          path={`/coursedetail/:courseid/addtocart`}
          exact
          element={<Home />}
        ></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
