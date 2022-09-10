import React from "react";
import Rating from "./Rating";
import "../App.css";
function Card(props) {
  console.log(props);
  return (
    <a href={`/coursepage?filter=${props.course.id - 1}`}>
      <div className="card" style={{ border: "none" }}>
        <img src={props.course.image} className="course-img"></img>
        <h3 className="course-title">{props.course.title}</h3>
        <p
          className="author"
          style={{ textDecoration: "none", color: "black" }}
        >
          {props.course.instructor[0].name}
        </p>
        <Rating include={true} rating={props.course.rate}></Rating>
        <p className="price">E£ {props.course.price}</p>
      </div>
    </a>
  );
}

export default Card;
