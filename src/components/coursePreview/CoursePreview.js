import React from "react";
import { useContext } from "react";
import { DataContext } from "../../App";
import { useSearchParams } from "react-router-dom";
import styles from "../../styles/course/coursePreview.css";
function CoursePreview() {
  const [data, filtered] = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("filter");
  const course = data?.courses[id];
  return (
    <React.Fragment>
      <div className="previewToHide">
        <img src={course?.image} className="previewImg"></img>
        <div className="previewBody">
          <div>
            <span className="previewPrice">E£{course?.price} </span>
            <span className="originalPreviewPrice">
              <s>E£{course?.originalPrice}</s>
            </span>
            <span className="discount">
              &nbsp;
              {(
                (100 *
                  (parseFloat(course?.originalPrice) -
                    parseFloat(course?.price))) /
                parseFloat(course?.originalPrice)
              ).toFixed(0)}
              % off
            </span>
          </div>

          <button className="addToCart">Add to cart</button>
          <button className="buy">Buy now</button>
          <div
            style={{
              margin: "16px 0 0",
              fontSize: "12px",
              width: "100%",
              textAlign: "center",
            }}
          >
            30-Day Money-Back Guarantee
          </div>
          <div className="include">
            <div style={{ fontWeight: "700", margin: "20px 0 0" }}>
              This course includes:{" "}
            </div>
            <div className="courseLength">
              <i class="fa fa-play-circle-o"></i>&nbsp;&nbsp;
              {course?.totalLength.substring(
                0,
                course?.totalLength.search("h")
              )}
              <span> hours on-demand video</span>
            </div>
            <div className="articleCount">
              <i class="fa fa-file"></i>
              &nbsp;&nbsp;
              {course?.articlesCount}
              <span> articles</span>
            </div>

            <div className="resources">
              <i class="fa fa-download"></i>&nbsp;&nbsp;
              {course?.downloadableResource}
              <span> downloadable resources</span>
            </div>
            <div className="access">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z" />
              </svg>
              &nbsp;&nbsp;
              <span>Full lifetime access</span>
            </div>
            <div className="courseLength">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z" />
              </svg>
              &nbsp;&nbsp;
              <span>Access on mobile and TV</span>
            </div>
            <div className="courseLength">
              <i class="fa fa-trophy"></i>
              &nbsp;&nbsp;
              {course?.totalLength.substring(
                0,
                course?.totalLength.search("h")
              )}
              <span> hours on-demand video</span>
            </div>
          </div>
          <div className="share">
            <u className="share">
              <span>Share</span>
              <span>Gift this course</span>
              <span>Apply Coupon</span>
            </u>
          </div>
          <hr></hr>
          <div className="business">
            <h2>Training 5 or more people?</h2>
            <p>
              Get your team access to 17,000+ top Udemy courses anytime,
              anywhere.
            </p>
            <button className="business-btn">Try Udemy Business</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CoursePreview;
