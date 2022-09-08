import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import styles from "../styles/course/courseHeader.css";
import Rating from "./Rating";
function CourseHeader(courseIndex) {
  const data = useContext(DataContext);
  const courseDetails = data[1].courses[0];
  return (
    <React.Fragment>
      <div className="header">
        <p className="path">{courseDetails.topic}</p>
        <h1 className="heading">{courseDetails.title}</h1>
        <div className="intro">{courseDetails.Introduction}</div>
        <Rating rating={courseDetails.rate}></Rating>
        <div>
          <span className="ratingCount">
            ({courseDetails.ratingCount} ratings)&nbsp;
          </span>
          <span className="studentCount">
            {courseDetails.enrollCount} students
          </span>
        </div>
        <div>
          <span>Created by </span>
          <span className="author">{courseDetails.instructor.name}</span>
        </div>
        <div className="date-lang">
          <div className="lastUpdate">
            <i class="fa fa-exclamation-circle"></i>
            <span>{courseDetails.lastUpdate}</span>
          </div>
          <div className="lang">
            <i class="material-icons" style={{ fontSize: "14px" }}>
              language
            </i>

            <span>{courseDetails.language}</span>
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

            <span>{courseDetails.subs}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CourseHeader;
