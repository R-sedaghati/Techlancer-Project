import axios from "axios";
import { Component, createRef } from "react";

class ModalLogin extends Component {
  login_method = createRef();
  password = createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login_method: ", this.login_method.current.value);
    console.log("password: ", this.password.current.value);
    const account = {
      login_method: this.login_method.current.value,
      password: this.password.current.value,
    };
    if (account.login_method && account.password) {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/login/",
        account
      );
      console.log(response);
    }
  };
  render() {
    return (
      <>
        {/* <!-- Login-Modal --> */}
        <div
          className="modal fade"
          id="loginmodal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="container-fluid bg-dark text-white">
                  <div className="row">
                    <div className="col-lg-4 bg-cover modal-login-bg align-self-center"></div>
                    <div className="col-lg-8">
                      <form
                        onSubmit={this.handleSubmit}
                        className="row p-lg-5 gy-3"
                      >
                        <div className="col-12">
                          <h1>Login Form</h1>
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            ref={this.login_method}
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email or Phone number"
                          />
                        </div>
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-12">
                              <label
                                htmlFor="Password"
                                className="col-form-label"
                              >
                                Password
                              </label>
                            </div>
                            <div className="row">
                              <div className="col-md-8 d-flex">
                                <div className="input-group flex-nowrap">
                                  <input
                                    ref={this.password}
                                    type="password"
                                    id="Password"
                                    className="form-control"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Your password"
                                  />
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <i
                                      className="fa-solid fa-eye mx-auto"
                                      id="show-password"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-4 mt-3 mt-md-0 p-0">
                                <span className="form-text text-white ms-3">
                                  Must be 8-20 characters long.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 border-bottom pb-4 pt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Remember me!
                          </label>
                          <a
                            href="#"
                            className="text-decoration-none text-primary ms-5"
                            data-bs-toggle="modal"
                            data-bs-target="#resetpassmodal"
                          >
                            Forget your password?
                          </a>
                        </div>
                        <div className="row pt-4">
                          <button
                            className="btn btn-info col-md-5 mx-3 mb-2 mb-md-0"
                            type="button"
                          >
                            <i className="fa-brands fa-google"></i> Continue
                            with google
                          </button>
                          <button
                            className="btn btn-info col-md-5 mx-3"
                            type="button"
                          >
                            <i className="fa-brands fa-facebook"></i> Continue
                            with facebook
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="fs-5">
                            Create an account :
                            <a
                              href=""
                              className="text-decoration-none btn btn-primary ms-3"
                              data-bs-toggle="modal"
                              data-bs-target="#signupmodal"
                            >
                              Sign up now
                            </a>
                          </p>
                        </div>
                        <div className="col-12 m-0 mb-3 mb-sm-0">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                          >
                            Sign in
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger ms-3 btn-lg"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Login-Modal --> */}
      </>
    );
  }
}

export default ModalLogin;
