import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleLogin(e) {

    e.preventDefault();

    // Check empty fields
    if (username === "" || password === "") {

      alert("Please enter username and password");

      return;
    }

    // Login successful
    localStorage.setItem("isLoggedIn", "true");

    // Go back to Courses page
    navigate("/courses");
  }


  return (

    <div className="login-page">

      <div className="login-card">

        <div className="portal-title">

          <h2>PCDP Portal</h2>

        </div>


        <h1>
          Hi, Welcome Back!
        </h1>


        <form onSubmit={handleLogin}>

          {/* USERNAME */}

          <label>
            Username
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />


          {/* PASSWORD */}

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />


          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;