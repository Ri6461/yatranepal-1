const Login = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand fw-bold" href="#">
            Yatra Nepal
          </a>

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
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Packages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>

            <a class="btn btn-primary" href="#">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Login;