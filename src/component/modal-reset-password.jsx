import axios from "axios";
import { Component,createRef } from "react";
class ResetPassword extends Component {
  login_method = createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login_method: ", this.login_method.current.value);
    const account = {
      login_method: this.login_method.current.value,
    };
    if (account.login_method) {
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
        {/* <!-- ResetPass-modal --> */}
        <div
          className="modal fade"
          id="resetpassmodal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="container-fluid bg-dark text-white">
                  <div className="row">
                    <div className="col-lg-12 bg-cover modal-resetpass-bg align-self-center mt-3"></div>
                    <div className="col-lg-12">
                      <form
                        onSubmit={this.handleSubmit}
                        className="row p-lg-5 gy-3 pt-lg-0"
                      >
                        <div className="col-12">
                          <label
                            htmlFor="Resetpass"
                            className="form-label fs-4 mb-3"
                          >
                            Email
                          </label>
                          <input
                            ref={this.login_method}
                            type="text"
                            className="form-control"
                            id="Resetpass"
                            placeholder="Enter your email or Phone number"
                          />
                        </div>
                        <div className="col-12 mt-3 mb-3 mb-sm-0">
                        <div class="d-grid gap-2">
                            <button class="btn btn-success" type="submit" data-bs-toggle="modal" data-bs-target="#Otpmodal">Show OTP</button>
                            <button class="btn btn-danger" type="button" data-bs-dismiss="modal">Close</button>
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
        {/* <!-- End of ResetPass-modal --> */}
      </>
    );
  }
}

export default ResetPassword;
