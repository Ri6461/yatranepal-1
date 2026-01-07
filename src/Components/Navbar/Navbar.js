import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ isLoggedIn }) => {
  const handleLogout = () => {
    // ✅ Remove the token cookie
    Cookies.remove("token");

    // Redirect to login page
    window.location.href = "/login";
  };
  console.log(isLoggedIn)
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <Link class="navbar-brand fw-bold" to={"/"}>
            Yatra Nepal
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Packages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>

            {isLoggedIn ?
              <>
                <a className="btn btn-danger" href="/" onClick={() => handleLogout()}>
                  Logout
                </a>

              </>
              :
              <>
                <a className="btn btn-primary" href="/login">
                  Login
                </a>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  );
};
export default Login;