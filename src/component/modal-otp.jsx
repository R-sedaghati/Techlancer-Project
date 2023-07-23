import axios from "axios";
import { Component, createRef } from "react";
class ModalOtp extends Component {
  code = createRef();
  password = createRef();
  password_confirm = createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("code: ", this.code.current.value);
    console.log("password: ", this.password.current.value);
    console.log("password_confirm: ", this.password_confirm.current.value);
    const account = {
      code: this.code.current.value,
      password: this.password.current.value,
      password_confirm: this.password_confirm.current.value,
    };
    if (account.code && account.password && account.password_confirm) {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/reset/password/",
        account
      );
      console.log(response);
    }
  };
  render() {
    return (
      <>
        {/* <!-- OTP-modal --> */}
        <div
          className="modal fade"
          id="Otpmodal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="container-fluid bg-dark text-white">
                  <div className="row">
                    <div className="col-lg-12 bg-cover modal-otp-bg align-self-center mt-3"></div>
                    <div className="col-lg-12">
                      <form
                        onSubmit={this.handleSubmit}
                        className="row p-lg-5 gy-3 pt-lg-0"
                      >
                        <div className="col-12">
                          <label htmlFor="otp" className="form-label fs-4 mb-3">
                            Enter 4 Digit OTP
                          </label>
                          <div className="col-12">
                            <div className="d-flex justify-content-center">
                              <input
                                type="text"
                                id="otp"
                                className="otp-field mx-1"
                                maxLength={1}
                                ref={this.code}
                              />
                              <input
                                type="text"
                                id="otp"
                                className="otp-field mx-1"
                                maxLength={1}
                                ref={this.code}
                              />
                              <input
                                type="text"
                                id="otp"
                                className="otp-field mx-1"
                                maxLength={1}
                                ref={this.code}
                              />
                              <input
                                type="text"
                                id="otp"
                                className="otp-field mx-1"
                                maxLength={1}
                                ref={this.code}
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-secondary">
                          Don't receive the OTP yet?{" "}
                          <a href="" className="color-1 text-decoration-none">
                            Resend OTP
                          </a>
                        </p>
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
                              <div className="col-md-12 d-flex">
                                <div className="input-group flex-nowrap">
                                  <input
                                    ref={this.password}
                                    type="password"
                                    id="Password4"
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
                                      id="show-password4"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8 mt-3 mt-md-0 p-0">
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
                              <div className="col-md-12 d-flex">
                                <div className="input-group flex-nowrap">
                                  <input
                                    ref={this.password_confirm}
                                    type="password"
                                    id="Password5"
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
                                      id="show-password5"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-8 mt-3 mt-md-0 p-0">
                                <span className="form-text text-white ms-3">
                                  Must be 8-20 characters long.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mt-3 mb-3 mb-sm-0">
                          <div class="d-grid gap-2">
                            <button class="btn btn-success" type="submit">
                              Send OTP
                            </button>
                            <button
                              class="btn btn-danger"
                              type="button"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of OTP-modal --> */}
      </>
    );
  }
}

export default ModalOtp;
