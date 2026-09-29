import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import MyCourses from "./pages/MyCourses";
import View from "./pages/View";
import Practice from "./pages/Practice";
import AptitudeExam from "./pages/AptitudeExam";
import CodeReview from "./pages/CodeReview";


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Courses />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/courses"
        element={<Courses />}
      />

      <Route
        path="/course/:id"
        element={<CourseDetails />}
      />

      <Route
        path="/my-courses"
        element={<MyCourses />}
      />

      <Route
        path="/my-courses/:id"
        element={<View />}
      />

      <Route
        path="/practice"
        element={<Practice />}
      />

      <Route
        path="/aptitude-exam/:subject"
        element={<AptitudeExam />}
      />

      <Route
        path="/code-review"
        element={<CodeReview />}
      />

    </Routes>
  );
}

export default App;