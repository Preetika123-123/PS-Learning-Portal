import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const myCourses = [
  {
    id: 1,
    name: "Data Science Level 0",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
  },
  {
    id: 2,
    name: "Programming Python Level - 3",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
  },
  {
    id: 3,
    name: "Programming C++ - Level 3",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
  {
    id: 4,
    name: "C Programming MCQ Level 1",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    id: 5,
    name: "OS - (CSE - Core concept) Level 3",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 6,
    name: "DBMS Level 3 - (CSE - core concept)",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  },
  {
    id: 7,
    name: "Web Technology - Level 1",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

function MyCourses() {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <h1 className="my-course-title">
          My Courses
        </h1>

        <div className="my-course-grid">

          {myCourses.map((course) => (
            <Link
              key={course.id}
              to={`/my-courses/${course.id}`}
              className="my-course-card"
            >

              <img
                src={course.image}
                alt={course.name}
              />

              <h2>{course.name}</h2>

            </Link>
          ))}

        </div>

      </main>

    </div>
  );
}

export default MyCourses;