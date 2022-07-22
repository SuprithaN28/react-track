import React from "react";
import classes from "./CheckedOut.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const CheckedOut = ({ setPopup }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.modal}>
      <div className={classes.modalContainer}>
        <div className={classes.title}>
          <div>You have successfully placed your order</div>
          <div>Thank you for shopping with us..!</div>
        </div>
        <div className={classes.footer}>
          <button
            onClick={() => {
              setPopup(false);
              navigate("/");
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

export default CheckedOut;
