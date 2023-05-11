import React from "react";
import { useContext } from "react";
import { DataContext } from "../../App";
import Lecture from "./Lecture";
import { useSearchParams } from "react-router-dom";
function LecturesList(props) {
  const { data } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const index = searchParams.get("filter");
  return (
    <div className="lectureBody">
      <p className="sectionHeader">Course Content</p>
      {data?.courses[index]?.content?.map((obj) => (
        <Lecture lecture={obj}></Lecture>
      ))}
    </div>
  );
}

export default LecturesList;
