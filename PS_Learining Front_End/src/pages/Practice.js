import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const practiceCourses = [
  {
    name: "Training Identification Assessment - Aptitude",
    questions: "10 / 10",
    progress: 0,
    subject: "aptitude",
  },
  {
    name: "Training Identification Assessment - DBMS",
    questions: "10 / 10",
    progress: 100,
    subject: "dbms",
  },
  {
    name: "Training Identification Assessment - Data Structures",
    questions: "10 / 10",
    progress: 100,
    subject: "data-structures",
  },
  {
    name: "Training Identification Assessment - Programming",
    questions: "10 / 10",
    progress: 100,
    subject: "programming",
  },
  {
    name: "Training Identification Assessment - C Programming",
    questions: "10 / 10",
    progress: 100,
    subject: "c-programming",
  },
  {
    name: "Training Identification Assessment - Python",
    questions: "10 / 10",
    progress: 100,
    subject: "python",
  },
  {
    name: "Training Identification Assessment - Web Technology",
    questions: "10 / 10",
    progress: 100,
    subject: "web-technology",
  },
];

function PracticeCard({ course }) {
  return (
    <div className="practice-card">

      <div className="practice-image">
        <div className="head-circle">⚙️</div>
      </div>

      <h2>{course.name}</h2>

    </div>
  );
}

function Practice() {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <div className="practice-header">

          <div>
            <h1>Practice</h1>
            <p>7 courses available to practice</p>
          </div>

          <button className="debug-button">
            Code Debugging
          </button>

        </div>

        <div className="practice-grid">
          {practiceCourses.map((course, index) => (
            <Link
              key={index}
              to={`/aptitude-exam/${course.subject}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <PracticeCard course={course} />
            </Link>
          ))}
        </div>

      </main>

    </div>
  );
}

export default Practice;