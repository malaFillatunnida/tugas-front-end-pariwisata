import React from "react";
import { Image } from "react-bootstrap";

const Login = () => {
  return (
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3">Sign In</p>
              </div>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="/register" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
