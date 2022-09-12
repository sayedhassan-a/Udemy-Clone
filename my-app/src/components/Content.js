import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { DataContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import { QueryContext } from "./Home";
function Content() {
  const [data, filtered] = useContext(DataContext);
  const filter = useContext(QueryContext);
  const view = filter?.map((x) => <Card course={x}></Card>);

  if (data)
    return (
      <div className="content">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 204,000 online video courses with new additions published
          every month
        </p>

        <div className="courses">
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
          <div className="d-flex p-2 ">
            <div className="view">{view}</div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <Spinner
        animation="border"
        role="status"
        style={{
          display: "block",
          margin: "auto",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
}

export default Content;
