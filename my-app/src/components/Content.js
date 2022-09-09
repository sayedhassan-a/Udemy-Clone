import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { DataContext } from "../App";

function Content() {
  const data = useContext(DataContext);
  const courseList = data?.courses;
  console.log(courseList);
  const view = courseList?.map((x) => <Card course={x}></Card>);
  return (
    <div className="container">
      <h2>{courseList?.title}</h2>
      <p>{courseList?.description}</p>
      <div className="view">{view}</div>
    </div>
  );
}

export default Content;
