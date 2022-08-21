import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Card from "./components/Card";
import Content from "./components/Content";
function App() {
  let obj = {
    title: "Top courses in Python",
    header: "Expand your career opportunities with Python",
    description:
      "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
    courses: [
      {
        id: 394676,
        title: "Learn Python: The Complete Python Programming Course",
        headline:
          "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        rating: 4.372561,
        image: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
        instructors: [
          {
            name: "Avinash Jain",
            jop: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
            image:
              "https://img-b.udemycdn.com/user/100x100/10260436_946b_6.jpg",
          },
          {
            name: "The Codex",
            jop: "Teaching Python through Projects",
            image: "https://img-b.udemycdn.com/user/100x100/52310762_220a.jpg",
          },
        ],
        price: 16.99,
      },
      {
        id: 396876,
        title: "Learning Python for Data Analysis and Visualization",
        headline:
          "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!",
        rating: 4.3899083,
        image: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
        instructors: [
          {
            name: "Jose Portilla",
            jop: "Head of Data Science at Pierian Training",
            image: "https://img-c.udemycdn.com/user/100x100/9685726_67e7_4.jpg",
          },
        ],
        price: 19.99,
      },
      {
        id: 405878,
        title: "Python for Beginners - Learn Programming from scratch",
        headline:
          "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
        rating: 4.40372,
        image: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
        instructors: [
          {
            name: "Edwin Diaz",
            jop: "Web Developer & Premium Instructor - 800,000 students",
            image: "https://img-c.udemycdn.com/user/100x100/6772884_fcfc_2.jpg",
          },
          {
            name: "Coding Faculty Solutions",
            jop: "Coding Faculty",
            image: "https://img-c.udemycdn.com/user/100x100/34613172_6fb4.jpg",
          },
        ],
        price: 14.99,
      },
      {
        id: 426570,
        title: "Learn Python: Python for Beginners",
        headline:
          "Python introduction for beginners. Learn complete Python from scratch!",
        rating: 4.2765956,
        image: "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
        instructors: [
          {
            name: "Abrar Hussain",
            jop: "Programmer, Student",
            image:
              "https://img-c.udemycdn.com/user/100x100/10971708_a969_3.jpg",
          },
        ],
        price: 16.99,
      },
      {
        id: 449532,
        title: "Python Beyond the Basics - Object-Oriented Programming",
        headline:
          "From Classes To Inheritance - OOP In-Depth For Python Programmers",
        rating: 4.3240743,
        image: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
        instructors: [
          {
            name: "Infinite Skills",
            jop: "High Quality Training",
            image: "https://img-c.udemycdn.com/user/100x100/39032_bdc3_5.jpg",
          },
        ],
        price: 17.99,
      },
    ],
  };
  return (
    <div className="App">
      <Content field={obj}></Content>
    </div>
  );
}

export default App;
