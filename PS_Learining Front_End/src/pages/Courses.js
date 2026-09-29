import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import {
  MdSearch,
} from "react-icons/md";


const coursesData = [
  {
    id: 1,
    name: "Java Programming",
    level: 5,
    category: "Programming",
    progress: 40,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx9PHel_8LpUnooQ8rtre5LDChoAqyDl3KcMII7WsN89rqKkl3kpjItsz&s=10"
  },

  {
    id: 2,
    name: "Advanced Modelling & Simulation",
    level: 2,
    category: "Advanced",
    progress: 0,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },

  {
    id: 3,
    name: "Algebra",
    level: 3,
    category: "GENERAL Skill",
    progress: 33,
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904"
  },

  {
    id: 4,
    name: "Analog Electronics - Mock Test",
    level: 6,
    category: "Hardware",
    progress: 0,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },

  {
    id: 5,
    name: "Aptitude",
    level: 6,
    category: "GENERAL Skill",
    progress: 29,
    image:
      "https://www.theforage.com/blog/wp-content/uploads/2024/10/career-aptitude-test.jpg"
  },

  {
    id: 6,
    name: "C Programming",
    level: 4,
    category: "Programming",
    progress: 70,
    image:
      "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/c-programming-language.jpg?w=1600&h=900&fit=crop"
  },

  {
    id: 7,
    name: "DBMS",
    level: 3,
    category: "CSE - Core Concept",
    progress: 50,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qwoBNFqs_QFfSXbwljMlWn5OyQbBN5SReTYgsDyPZFoar_kDECYKl-3c&s=10"
  },

  {
    id: 8,
    name: "Python Programming",
    level: 2,
    category: "Programming",
    progress: 80,
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
  },

  {
    id: 9,
    name: "Web Technology",
    level: 1,
    category: "CSE - Core Concept",
    progress: 20,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },

  {
    id: 10,
    name: "C++ Programming",
    level: 4,
    category: "Programming",
    progress: 40,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
  },

  {
    id: 11,
    name: "UI/UX",
    level: 5,
    category: "Designing",
    progress: 80,
    image:
      "https://saastargo.com/assets/images/ui-ux/mobile-uiux-mockup.jpg"
  },

  {
    id: 12,
    name: "Data Structure",
    level: 7,
    category: "Programming",
    progress: 10,
    image:
      "https://miro.medium.com/1*J38nYZU7gzu-4lQmtjlSUw.jpeg"
  }
];


function CourseCard({ course }) {

  return (

    <Link
      to={`/course/${course.id}`}
      className="course-card"
    >

      <img
        src={course.image}
        alt={course.name}
      />

      <h2>
        {course.name}
      </h2>

      <div className="course-info">

        <span>
          Levels: {course.level}
        </span>

        <span>
          {course.category}
        </span>

      </div>

      <div className="progress-container">

        <div
          className="progress-bar"
          style={{
            width: `${course.progress}%`
          }}
        ></div>

      </div>

      <p className="progress-text">
        Progress: {course.progress}%
      </p>

    </Link>
  );
}


function Courses() {

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All Categories");

  // Check login status
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );


  const filteredCourses =
    coursesData.filter((course) => {

      const searchMatch =
        course.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const categoryMatch =
        category === "All Categories" ||
        course.category === category;

      return searchMatch && categoryMatch;
    });


  // Logout function
  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };


  return (

    <div className="app-layout">

      <Sidebar />

      <main className="main-content">


        {/* PAGE HEADER */}

        <div className="page-header">

          <h1>
            Courses Available
          </h1>

          <div className="top-buttons">

            <Link
              to="/login"
              className="top-login-btn"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="top-signup-btn"
            >
              Sign Up
            </Link>

          </div>

        </div>

        {/* SEARCH AND FILTER */}

        <div className="course-top-box">

          <div className="search-container">

            <MdSearch />

            <input
              type="text"
              placeholder="Search courses by name or category..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            <option>
              All Categories
            </option>

            <option>
              Programming
            </option>

            <option>
              Hardware
            </option>

            <option>
              GENERAL Skill
            </option>

            <option>
              CSE - Core Concept
            </option>

          </select>


          <select>

            <option>
              Sort by Name
            </option>

            <option>
              Sort by Progress
            </option>

          </select>

        </div>


        {/* SKILL TAB */}

        <div className="skill-tab">

          Personalized Skills

          <span>
            89
          </span>

        </div>


        {/* SECTION TITLE */}

        <h2 className="section-title">

          Personalized Skills

          <span>
            ({filteredCourses.length} courses)
          </span>

        </h2>


        {/* COURSE GRID */}

        <div className="course-grid">

          {filteredCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
            />

          ))}

        </div>

      </main>

    </div>
  );
}


export default Courses;