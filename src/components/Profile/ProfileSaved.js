import React from "react";
import classes from "./ProfileSaved.module.css";

const ProfileSaved = ({ setPopup }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContainer}>
        <div className={classes.title}>
          <div>Your profile is saved..!</div>
        </div>
        <div className={classes.footer}>
          <button
            onClick={() => {
              setPopup(false);
            }}
            id="cancelBtn"
            className={classes.titleCloseBtn}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSaved;
