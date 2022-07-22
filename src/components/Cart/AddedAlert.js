import React from "react";
import classes from "./AddedAlert.module.css";

const AddedAlert = ({ setPopup }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContainer}>
        <div className={classes.title}>
          <div>Course successfully added in the card</div>
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

export default AddedAlert;
