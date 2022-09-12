import React from "react";
import styles from "../styles/course/progressBar.css";
import Rating from "./Rating";
function ProgressBar(props) {
  const { rating } = props;
  return (
    rating && (
      <React.Fragment>
        <div className="pb">
          <div className="pr" style={{ width: rating + "%" }}></div>
          <div className="empty-part"></div>
        </div>
        <Rating rating={rating}></Rating>
        <u className="pr-num">{rating}%</u>
      </React.Fragment>
    )
  );
}

export default ProgressBar;
