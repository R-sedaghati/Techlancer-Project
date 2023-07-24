import axios from "axios";
import { Component, createRef } from "react";
class ModalSignup extends Component {
  login_method = createRef();
  password = createRef();
  password_confirm = createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login_method: ", this.login_method.current.value);
    console.log("password: ", this.password.current.value);
    console.log("password_confirm: ", this.password_confirm.current.value);
    const account = {
      login_method: this.login_method.current.value,
      password: this.password.current.value,
      password_confirm: this.password_confirm.current.value,
    };
    if (account.login_method && account.password && account.password_confirm) {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/register/",
        account
      );
      console.log(response);
    }
  };
  render() {
    return (
      <>
        {/* <!-- Signup-modal --> */}
        <div
          className="modal fade"
          id="signupmodal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="container-fluid bg-dark text-white">
                  <div className="row">
                    <div className="col-lg-4 bg-cover modal-signup-bg align-self-center"></div>
                    <div className="col-lg-8">
                      <form
                        onSubmit={this.handleSubmit}
                        className="row p-lg-5 gy-3"
                      >
                        <div className="col-12">
                          <h1>Sign Up Form</h1>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="firstname" className="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="lastname" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="Enter your name"
                          />
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
                                    id="Password2"
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
                                      id="show-password2"
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
                        <div className="col-12">
                          <div className="row g-3 align-items-center">
                            <div className="col-12">
                              <label
                                htmlFor="Password"
                                className="col-form-label"
                              >
                                Confirm Password
                              </label>
                            </div>
                            <div className="row">
                              <div className="col-md-8 d-flex">
                                <div className="input-group flex-nowrap">
                                  <input
                                    ref={this.password_confirm}
                                    type="password"
                                    id="Password3"
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
                                      id="show-password3"
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
                        <div className="col-12 mt-3 mb-3 mb-sm-0">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                            data-bs-toggle="modal"
                            data-bs-target="#OptRegister"
                          >
                            Sign up
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
        {/* <!-- End of Signup-modal --> */}
      </>
    );
  }
}

export default ModalSignup;
