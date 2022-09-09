import React from "react";
import styles from "../../styles/course/instructor.css";
function Instructor(props) {
  const { instructor } = props;
  console.log(props);
  return (
    <div className="instructor">
      <div className="name">
        <u>{instructor.name}</u>
      </div>
      <div className="intro">{instructor.intro}</div>
      <div className="overview">
        <img className="instructorImage" src={instructor.image} />

        <div className="merits">
          <div className="meritItem">
            <i class="fa fa-star"></i>
            <p>{instructor.rating} Instructor Rating</p>
          </div>
          <div className="meritItem">
            <i class="fa fa-certificate"></i>
            <p>{instructor.reviewsNumber} Reviews</p>
          </div>
          <div className="meritItem">
            <i class="fa fa-users"></i>
            <p>{instructor.studentsNumber} Students</p>
          </div>
          <div className="meritItem">
            <i class="fa fa-play-circle"></i>
            <p>{instructor.coursesNumber} Courses</p>
          </div>
        </div>
      </div>
      <p className="instructorInfo">&nbsp;&nbsp;{instructor.description}</p>
    </div>
  );
}

export default Instructor;
