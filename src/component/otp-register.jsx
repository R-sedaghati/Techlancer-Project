import axios from "axios";
import { Component, createRef } from "react";
class OtpRegister extends Component {
  code = createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("code: ", this.code.current.value);
    const account = {
      code: this.code.current.value,
    };
    if (account.code) {
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
        {/* <!-- OTP-Register --> */}
        <div
          className="modal fade"
          id="OptRegister"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="container-fluid bg-dark text-white">
                  <div className="row">
                    <div className="col-lg-12 bg-cover otp-register-bg align-self-center mt-3"></div>
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
        {/* <!-- End of OTP-Register --> */}
      </>
    );
  }
}

export default OtpRegister;
