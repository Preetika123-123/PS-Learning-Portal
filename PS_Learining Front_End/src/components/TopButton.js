import { Link } from "react-router-dom";

function TopButtons() {
  return (
    <div className="top-buttons">
      <Link to="/login" className="top-btn">
        Login
      </Link>

      <Link to="/register" className="top-btn">
        Sign Up
      </Link>
    </div>
  );
}

export default TopButtons;