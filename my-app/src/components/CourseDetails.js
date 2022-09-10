import React from "react";
import Instructor from "./course/Instructor";
import { useContext } from "react";
import { DataContext } from "../App";
import CoursePreview from "./coursePreview/CoursePreview";
import styles from "../styles/course/coursePage.css";
import CourseHeader from "./CourseHeader";
import Overview from "./course/Overview";
import Lecture from "./course/Lecture";
import LecturesList from "./course/LecturesList";
import Review from "./Review";
import { useSearchParams } from "react-router-dom";

function CourseDetails() {
  const [data, filtered] = useContext(DataContext);
  console.log(data?.courses);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("filter");
  const course = data?.courses[id];
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="coursePage">
          <div className="headerBackground">
            <CourseHeader courseIndex="id"></CourseHeader>
          </div>
          <Overview goalsList={course?.overview}></Overview>
          <LecturesList data={data}></LecturesList>
          <div className="instructorBody">
            <p className="sectionHeader" style={{ width: "80%" }}>
              Instructors
            </p>
            {course?.instructor.map((element) => (
              <Instructor instructor={element}></Instructor>
            ))}
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
    </React.Fragment>
  );
}

export default CourseDetails;
