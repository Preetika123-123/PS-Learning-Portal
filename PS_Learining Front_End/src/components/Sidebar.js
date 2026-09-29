import {
  MdDashboard,
  MdOndemandVideo,
  MdMenuBook,
  MdCode,
  MdLogout
} from "react-icons/md";

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

function Sidebar() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/courses");
  };

  return (
    <div className="sidebar">

      <Link
        to="/courses"
        className={
          location.pathname === "/courses"
            ? "side-icon active"
            : "side-icon"
        }
      >
        <MdDashboard />
      </Link>


      <Link
        to="/practice"
        className={
          location.pathname === "/practice"
            ? "side-icon active"
            : "side-icon"
        }
      >
        <MdOndemandVideo />
      </Link>


      <Link
        to="/my-courses"
        className={
          location.pathname === "/my-courses"
            ? "side-icon active"
            : "side-icon"
        }
      >
        <MdMenuBook />
      </Link>


      <Link
        to="/code-review"
        className={
          location.pathname === "/code-review"
            ? "side-icon active"
            : "side-icon"
        }
      >
        <MdCode />
      </Link>


      <div className="sidebar-bottom">

        <button
          className="side-icon logout-button"
          onClick={handleLogout}
        >
          <MdLogout />
        </button>

      </div>

    </div>
  );
}

export default Sidebar;