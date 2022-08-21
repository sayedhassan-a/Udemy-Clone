import React from "react";

function Card(props) {
  let x = parseFloat(props.course.rating);
  x = x.toFixed(1);
  const rate = () => {
    if (x > 0.5) {
      x--;
      return "fa fa-star pers-rate";
    } else if (x > 0) {
      x--;
      return "fa fa-star-half-empty pers-rate";
    } else {
      x--;
      return "fa fa-star";
    }
  };
  return (
    <div className="card">
      <img src={props.course.image} className="course-img"></img>
      <h3 className="course-title">{props.course.title}</h3>
      <p className="author">{props.course.instructors[0].name}</p>
      <span className="pers-rate-num">{x}</span>
      <span className={rate()}></span>
      <span className={rate()}></span>
      <span className={rate()}></span>
      <span className={rate()}></span>
      <span className={rate()}></span>
      <p className="price">{props.course.price}</p>
    </div>
  );
}

export default Card;
