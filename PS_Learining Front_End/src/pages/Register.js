import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleRegister(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Registration successful!");
    navigate("/login");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="portal-title">
          <h2>PCDP Portal</h2>
        </div>
        <h1>Create Account</h1>
        <p className="register-subtitle">
          Register to access the PCDP Portal
        </p>
        <form onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login-button"
          >
            Register
          </button>
        </form>
        <p className="register-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;