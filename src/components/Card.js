import React, { useEffect } from "react";
import Rating from "./Rating";
import "../App.css";
import { useState, useRef } from "react";
import Overview from "./course/Overview";
import Goal from "./course/Goal";

function Card(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    " November",
    "December",
  ];
  const date = props?.course.lastUpdate;
  const [show, setShow] = useState("hidden");
  const [left, setLeft] = useState("right");
  const [width, setWidth] = useState();
  const popupref = useRef();
  useEffect(() => {
    if (
      popupref.current?.getBoundingClientRect().right + 10 >=
      document.body.clientWidth
    ) {
      setLeft("left");
    } else setLeft("right");
  }, [document.body.clientWidth]);
  return (
    <div onMouseLeave={() => setShow("hidden")}>
      <a
        href={`/coursepage?filter=${props.course.id - 1}`}
        onMouseEnter={() => setShow("visible")}
      >
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
      <div className="popup-box">
        <div
          className={"popup-border " + left}
          style={{ visibility: show }}
          ref={popupref}
        >
          <div className={"popup " + left}>
            <h3 className="course-title">{props.course.title}</h3>
            <p className="popup-date">
              Updated{" "}
              <b>
                {
                  months[
                    parseInt(date[1] == "/" ? date[0] : date[0] + date[1]) - 1
                  ]
                }{" "}
                {date?.slice(date[1] == "/" ? 2 : 3)}
              </b>
            </p>
            <p className="popup-hours">
              {props.course.totalLength.slice(
                0,
                props.course.totalLength.search("h")
              )}
              {parseInt(
                props.course.totalLength.slice(
                  props.course.totalLength.search("h") + 1,
                  props.course.totalLength.search("m")
                )
              ) >= 15
                ? ".5"
                : ""}{" "}
              total hours
            </p>
            <p className="popup-intro">{props.course.introduction}</p>
            {props?.course.overview.slice(0, 3).map((goal) => (
              <Goal goal={goal}></Goal>
            ))}
            <div>
              <button className="addToCart" style={{ width: "70%" }}>
                Add to cart
              </button>
              <div className="heart-box">
                <i class="fa fa-heart-o" style={{ fontSize: "20px" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
