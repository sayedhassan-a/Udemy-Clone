import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import CoursePreview from "./coursePreview/CoursePreview";
import Rating from "./Rating";
import styles from "../styles/course/courseReview.css";
function Review(props) {
  const { review } = props;
  console.log(parseFloat(review.name.search(" ")));
  return (
    <React.Fragment>
      <div className="review">
        <div className="avatar">
          {review.name[0]}
          {review.name[review.name.search(" ") + 1]}
        </div>
        <div className="reviewContent">
          <div className="user name">{review.name}</div>
          <Rating include={false} rating={review.rate}></Rating>
          <p className="comment">{review.content}</p>
          <p style={{ fontSize: "12px" }}>Was this review helpful?</p>
          <div className="report">
            <div className="icon like">
              <i class="fa fa-thumbs-o-up" style={{ fontSize: "20px" }}></i>
            </div>
            <div className="icon dislike">
              <i class="fa fa-thumbs-o-down" style={{ fontSize: "20px" }}></i>
            </div>
            <p style={{ display: "inline" }}>
              <u style={{ fontSize: "14px" }}>Report</u>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
    </React.Fragment>
  );
}

export default Review;
