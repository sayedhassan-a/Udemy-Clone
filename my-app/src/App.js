import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Card from "./components/Card";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import CourseHeader from "./components/CourseHeader";
import CoursePreview from "./components/coursePreview/CoursePreview";
import Review from "./components/Review";
import Instructor from "./components/course/Instructor";
import CourseDetails from "./components/CourseDetails";
import Overview from "./components/course/Overview";
import Lecture from "./components/course/Lecture";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import DataFetch from "./components/DataFetch";
import { useSearchParams } from "react-router-dom";
export const DataContext = React.createContext();

function App() {
  const [coursDetails, setData] = useState();
  const [filtered, setFilter] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        {
          setData(data);
          setFilter(data.courses);
        }
      });
  }, []);
  const search = (str) => {
    let temp = coursDetails?.courses;
    console.log(filtered);
    setFilter(
      temp?.filter((obj) => {
        return obj.title.search(" " + str) != -1;
      })
    );
  };

  return (
    <Router>
      <div className="App" style={{ margin: "0", padding: "0" }}>
        <Nav handle={search}></Nav>
        <DataContext.Provider value={[coursDetails, filtered]}>
          <Switch>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/coursepage" element={<CourseDetails />}></Route>
          </Switch>
        </DataContext.Provider>
      </div>
    </Router>
  );
}

export default App;
