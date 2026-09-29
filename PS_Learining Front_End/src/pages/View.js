import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const courseData = {
  1: {
    name:"Data Science Level 0",
    level: "Data Science Level 0",

    lessons: [
      {
        title: "Data Acquisition and Data Preprocessing",
        materials: "0 / 1",
        video: "https://youtu.be/sVBayDOXFuc"
      },
      {
        title: "Exploratory Data Analysis",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_2"
      },
      {
        title: "Correlation analysis",
        materials: "0 / 1",
        video: "https://www.youtube.com/embed/VIDEO_ID_3"
      }
    ]
  },

  2: {
    name: "Programming Python Level - 3",
    level: "Python Programming Level 3",

    lessons: [
      {
        title: "Python Basics",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_4"
      },
      {
        title: "Functions and Modules",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_5"
      },
      {
        title: "Object Oriented Programming",
        materials: "0 / 3",
        video: "https://www.youtube.com/embed/VIDEO_ID_6"
      }
    ]
  },

  3: {
    name: "Programming C++ - Level 3",
    level: "C++ Programming Level 3",

    lessons: [
      {
        title: "C++ Programming Basics",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_7"
      },
      {
        title: "Classes and Objects",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_8"
      },
      {
        title: "Inheritance and Polymorphism",
        materials: "0 / 3",
        video: "https://www.youtube.com/embed/VIDEO_ID_9"
      }
    ]
  },

  4: {
    name: "C Programming MCQ Level 1",
    level: "C Programming Level 1",

    lessons: [
      {
        title: "C Programming Fundamentals",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_10"
      },
      {
        title: "Variables and Data Types",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_11"
      },
      {
        title: "C Programming MCQ",
        materials: "0 / 1",
        video: "https://www.youtube.com/embed/VIDEO_ID_12"
      }
    ]
  },

  5: {
    name: "OS - (CSE - Core concept) Level 3",
    level: "Operating System Level 3",

    lessons: [
      {
        title: "Operating System Fundamentals",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_13"
      },
      {
        title: "Process Management",
        materials: "0 / 3",
        video: "https://www.youtube.com/embed/VIDEO_ID_14"
      },
      {
        title: "Memory Management",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_15"
      }
    ]
  },

  6: {
    name: "DBMS Level 3 - (CSE - core concept)",
    level: "DBMS Level 3",

    lessons: [
      {
        title: "Database Management System",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_16"
      },
      {
        title: "SQL Queries",
        materials: "0 / 3",
        video: "https://www.youtube.com/embed/VIDEO_ID_17"
      },
      {
        title: "Normalization",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_18"
      }
    ]
  },

  7: {
    name: "Web Technology - Level 1",
    level: "Web Technology Level 1",

    lessons: [
      {
        title: "HTML Fundamentals",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_19"
      },
      {
        title: "CSS Basics",
        materials: "0 / 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_20"
      },
      {
        title: "JavaScript Introduction",
        materials: "0 / 3",
        video: "https://www.youtube.com/embed/VIDEO_ID_21"
      }
    ]
  },
};

function View() {
  const { id } = useParams();

  const course = courseData[id];

  if (!course) {
    return (
      <div className="course-view-page">

        <Sidebar />

        <div className="course-view-content">
          <h2>Course Not Found</h2>
        </div>

      </div>
    );
  }

  return (
    <div className="course-view-page">

      <Sidebar />

      <div className="course-view-content">

        {/* LEFT SIDE */}

        <div className="learning-section">

          <h2>
            {course.lessons[0].title}
          </h2>

          <div className="video-box">

            <iframe
              src={course.lessons[0].video}
              title={course.lessons[0].title}
              allowFullScreen
            ></iframe>

          </div>

          <button className="complete-button">
            Mark as Complete
          </button>

        </div>


        {/* RIGHT SIDE */}

        <div className="details-section">

          {/* COURSE DETAILS */}

          <div className="details-card">

            <p className="purple-text">
              Course Details
            </p>

            <h2>
              {course.level}
            </h2>

            <button className="slot-button">
              Book a Slot
            </button>

          </div>


          {/* COURSE MATERIALS */}

          <div className="materials-card">

            <h2>
              Course Materials
            </h2>

            {course.lessons.map((lesson, index) => (

              <div
                className="material-item"
                key={index}
              >

                <div>

                  <h3>
                    {index + 1}. {lesson.title}
                  </h3>

                  <p>
                    Materials: {lesson.materials}
                  </p>

                </div>

                <span>
                  ⌄
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default View;