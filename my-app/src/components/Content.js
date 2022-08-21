import React from "react";
import Card from "./Card";
function Content(props) {
  console.log(props.field.courses[0]);
  const view = props.field.courses.map((x) => <Card course={x}></Card>);
  console.log(view);
  return (
    <div className="container">
      <h2>{props.field.title}</h2>
      <p>{props.field.description}</p>
      <div className="view">{view}</div>
    </div>
  );
}

export default Content;
