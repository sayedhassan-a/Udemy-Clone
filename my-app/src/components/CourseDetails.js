import React from "react";
import Instructor from "./course/Instructor";
import { useContext, useState } from "react";
import { DataContext } from "../App";
import CoursePreview from "./coursePreview/CoursePreview";
import styles from "../styles/course/coursePage.css";
import CourseHeader from "./CourseHeader";
import Overview from "./course/Overview";
import Lecture from "./course/Lecture";
import LecturesList from "./course/LecturesList";
import Review from "./Review";
import { useSearchParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import Footer from "./course/Footer";
import Rating from "./Rating";
function CourseDetails() {
  const [data, filtered] = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [show, setShow] = useState("more");
  const [h, setHeight] = useState("250px");

  const id = searchParams.get("filter");
  const course = data?.courses[id];
  const totalRate =
    course?.studentFeedback.reduce((pre, cur, ind) => {
      return parseInt(pre) + parseInt(cur) * (5 - ind);
    }, 0) / 100;
  return (
    <React.Fragment>
      <div
        className="d-flex flex-wrap"
        style={{
          height: "fitcontent",
        }}
      >
        <div className="coursePage">
          <div className="headerBackground">
            <CourseHeader courseIndex="id"></CourseHeader>
          </div>
          <Overview goalsList={course?.overview}></Overview>
          <LecturesList data={data}></LecturesList>
          <div className="requirements-body">
            <div className="sectionHeader">Requirements</div>
            <ul>
              {course?.requirements.map((obj) => {
                return <li>{obj}</li>;
              })}
            </ul>
          </div>
          <div className="description-body" style={{ height: h }}>
            <div className="sectionHeader">Description</div>
            {course?.description.map((obj, ind) => {
              if (ind) return <p>{obj}</p>;
              else
                return (
                  <p>
                    <b>{obj}</b>
                  </p>
                );
            })}
          </div>
          <button
            className="show-more"
            onClick={() => {
              if (show == "more") {
                setShow("less");
                setHeight("fit-content");
              } else {
                setShow("more");
                setHeight("250px");
              }
              console.log(show);
            }}
          >
            Show {show}
          </button>
          <div className="instructorBody">
            <p className="sectionHeader" style={{ width: "80%" }}>
              Instructors
            </p>
            {course?.instructor.map((element) => (
              <Instructor instructor={element}></Instructor>
            ))}
          </div>
          <div className="d-flex progress-body">
            <div className="progress-rate">
              <div className="progress-rate-num">{totalRate}</div>
              <Rating rating={totalRate}></Rating>
              <div>Course Rating</div>
            </div>
            <div>
              {course?.studentFeedback.map((rate) => (
                <ProgressBar rating={rate}></ProgressBar>
              ))}
            </div>
          </div>

          <div className="reviewBody">
            <p className="sectionHeader">Reviews</p>
            {course?.reviews.map((obj) => (
              <Review review={obj}></Review>
            ))}
          </div>
        </div>
        <CoursePreview className="pre"></CoursePreview>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default CourseDetails;
