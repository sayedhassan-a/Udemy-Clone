import React from "react";
import { useContext } from "react";
import { DataContext } from "../../App";
import styles from "../../styles/course/coursePreview.css";
function CoursePreview() {
  const data = useContext(DataContext);
  const course = data[1].courses[0];
  return (
    <div className="container">
      <img src={course.image}></img>
      <div className="preview">
        <div className="price">
          <span className="price">E£{course.price} </span>
          <span className="originalPrice">
            <s>E£{course.originalPrice}</s>
          </span>
          <span className="discount">
            &nbsp;
            {(
              (100 *
                (parseFloat(course.originalPrice) - parseFloat(course.price))) /
              parseFloat(course.originalPrice)
            ).toFixed(0)}
            % off
          </span>
        </div>

        <button className="addToCart">Add to cart</button>
        <button className="Buy">Buy now</button>
        <span>30-Day Money-Back Guarantee</span>
        <div className="include">
          <div>This course includes: </div>
          <div className="courseLength">
            <i class="fa fa-play-circle-o"></i>&nbsp;&nbsp;
            {course.totalLength.substring(0, course.totalLength.search("h"))}
            <span> hours on-demand video</span>
          </div>
          <div className="articleCount">
            <i class="fa fa-file"></i>
            &nbsp;&nbsp;
            {course.articlesCount}
            <span> articles</span>
          </div>

          <div className="resources">
            <i class="fa fa-download"></i>&nbsp;&nbsp;
            {course.downloadableResource}
            <span> downloadable resources</span>
          </div>
          <div className="access">
            <i class="fas fa-infinity"></i>
            &nbsp;&nbsp;
            <span>Full lifetime access</span>
          </div>
          <div className="courseLength">
            <i class="fas fa-mobile-alt"></i>
            &nbsp;&nbsp;
            <span>Access on mobile and TV</span>
          </div>
          <div className="courseLength">
            <i class="fa fa-play-circle-o"></i>&nbsp;&nbsp;
            {course.totalLength.substring(0, course.totalLength.search("h"))}
            <span> hours on-demand video</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePreview;
