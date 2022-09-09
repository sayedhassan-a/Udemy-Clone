import React from "react";
import Rating from "./Rating";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.course.image} className="course-img"></img>
      <h3 className="course-title">{props.course.title}</h3>
      <p className="">{props.course.instructor[0].name}</p>
      <Rating inclued={1} rating={props.course.rating}></Rating>

      <p className="price">{props.course.price}</p>
    </div>
  );
}

export default Card;
