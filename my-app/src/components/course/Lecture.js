import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/course/lecture.css";
function Lecture(props) {
  const { lecture } = props;
  console.log(lecture);
  return (
    <Accordion
      defaultActiveKey="0"
      style={{
        marginTop: "0",
        marginBottom: "0",
        paddingTop: "0",
        paddingBottom: "0",
      }}
    >
      <Accordion.Item
        style={{
          marginTop: "0",
          marginBottom: "0",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <Accordion.Header>
          <span className="lecture">{lecture[0][0]}</span>
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            {lecture[1].map((x) => (
              <li className="lesson">
                <i class="fa fa-play-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                {x}
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Lecture;
