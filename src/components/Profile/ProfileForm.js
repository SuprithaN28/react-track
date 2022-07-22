import AboutYourself from "./AboutYourself";
import AreaOfInterest from "./AreaOfIntrest";
import AreYouStudent from "./AreYouStudent";
import DisplayName from "./DisplayName";
import classes from "./Header.module.css";
import "./ProfileForm.css";
import ProfileSaved from "./ProfileSaved";
import React, { useState } from "react";

const ProfileForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const [popup, setPopup] = useState(false);
  const anchor = React.useRef();

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.textbox}>
          <img src="/header.png" className={classes.headerimg} alt="header" />
          <div className={classes.text}>
            <div>Profile</div>
          </div>
        </div>
      </div>

      <div className="card">
        <img className="image" src="/profilepic.png" alt="Profile Pic" />
        <form className="formlayout1" onSubmit={submitHandler}>
          <DisplayName name="name"></DisplayName>
          <AboutYourself></AboutYourself>
          <AreaOfInterest></AreaOfInterest>
          {popup && <ProfileSaved setPopup={setPopup} />}
          <AreYouStudent></AreYouStudent>
          <button
            type="reset"
            className="butn"
            value="Reset"
            onClick={(e) => {
              setPopup(true);
            }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
