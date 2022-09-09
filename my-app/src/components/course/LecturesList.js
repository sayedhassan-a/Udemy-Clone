import React from "react";
import { useContext } from "react";
import { DataContext } from "../../App";
import Lecture from "./Lecture";
function LecturesList(props) {
  console.log(props);
  const { index } = props;
  const data = useContext(DataContext);
  const course = data[1].courses;
  console.log(course[index].content);
  return (
    <div className="section">
      <p className="sectionHeader">Course Content</p>
      {course[index].content.map((obj) => (
        <Lecture lecture={obj}></Lecture>
      ))}
    </div>
  );
}

export default LecturesList;
