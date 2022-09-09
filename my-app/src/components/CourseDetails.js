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

function CourseDetails(props) {
  const { index } = props;
  const data = useContext(DataContext);
  const course = data[1].courses;
  console.log();
  return (
    <React.Fragment>
      <CoursePreview className="pre"></CoursePreview>
      <div className="headerBackground"></div>
      <div className="coursePage">
        <CourseHeader></CourseHeader>
        <Overview goalsList={course[index].overview}></Overview>
        <LecturesList index={index}></LecturesList>
        <p className="sectionHeader">Instructors</p>
        {course[index].instructor.map((element) => (
          <Instructor instructor={element}></Instructor>
        ))}
        <p className="sectionHeader">Reviews</p>
        {course[index].reviews.map((obj) => (
          <Review review={obj}></Review>
        ))}
      </div>
    </React.Fragment>
  );
}

export default CourseDetails;
