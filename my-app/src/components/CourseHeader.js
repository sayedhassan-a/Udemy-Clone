import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import styles from "../styles/course/courseHeader.css";
import Rating from "./Rating";
import { useSearchParams } from "react-router-dom";
function CourseHeader() {
  const [data, filtered] = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("filter");
  const courseDetails = data?.courses[id];
  const course = data?.courses[id];
  return (
    <React.Fragment>
      <div className="courseHeader">
        <p className="path">{courseDetails?.topic}</p>
        <img src={courseDetails?.image} className="headerImg" />
        <h1 className="heading">{courseDetails?.title}</h1>
        <div className="courseDesc">{courseDetails?.introduction}</div>
        <div>
          <Rating include={true} rating={courseDetails?.rate}></Rating>
          &nbsp;&nbsp;
          <span className="ratingCount">
            ({courseDetails?.ratingCount} ratings)
          </span>
          &nbsp;
          <span className="studentCount">
            {courseDetails?.enrollCount} students
          </span>
        </div>
        <div>
          <span>Created by </span>
          {courseDetails?.instructor.map((x) => (
            <span className="author">{x.name}</span>
          ))}
        </div>
        <div className="date-lang">
          <div className="lastUpdate">
            <i class="fa fa-exclamation-circle"></i>
            <span>Last updated {courseDetails?.lastUpdate}</span>
          </div>
          <div className="lang">
            <i class="material-icons" style={{ fontSize: "14px" }}>
              language
            </i>

            <span>{courseDetails?.language}</span>
          </div>
          <div className="subs">
            <span
              class="glyphicon"
              style={{
                color: "black",
                backgroundColor: "white",
              }}
            >
              &#xe188;
            </span>

            <span>{courseDetails?.subs}</span>
          </div>
        </div>
        <div className="smallPreview">
          <div>
            <span className="previewPrice">E£{course?.price} </span>
            <span className="originalPreviewPrice">
              <s>E£{course?.originalPrice}</s>
            </span>
            <span className="discount">
              &nbsp;
              {(
                (100 *
                  (parseFloat(course?.originalPrice) -
                    parseFloat(course?.price))) /
                parseFloat(course?.originalPrice)
              ).toFixed(0)}
              % off
            </span>
          </div>
          <button className="addToCart">Add to cart</button>
          <div
            style={{
              margin: "16px 0 0",
              fontSize: "12px",
              width: "100%",
              textAlign: "center",
            }}
          >
            30-Day Money-Back Guarantee
          </div>
          <div
            style={{
              margin: "16px 0 0",
              fontSize: "12px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Full lifetime access
          </div>
          <div
            className="share"
            style={{
              color: "white",
              textAlign: "center",
              margin: "1rem auto ",
            }}
          >
            <u className="share" style={{ color: "white", margin: "auto" }}>
              <span>Share</span>
              <span>Gift this course</span>
              <span>Apply Coupon</span>
            </u>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CourseHeader;
