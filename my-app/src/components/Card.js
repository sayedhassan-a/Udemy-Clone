import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.course.image} className="course-img"></img>
      <h3 className="course-title">{props.course.title}</h3>
      <p className="author">{props.course.instructors[0].name}</p>
      <p className="price">{props.course.price}</p>
    </div>
  );
}

export default Card;
