const ModalCantact = () => {
    return ( <>
        {/* <!-- Modal-Contact --> */}
    <div
      className="modal fade"
      id="contactmodal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="container-fluid bg-dark text-white">
              <div className="row">
                <div
                  className="col-lg-4 bg-cover modal-contact-bg align-self-center"
                ></div>
                <div className="col-lg-8">
                  <form action="" className="row p-lg-5 gy-3">
                    <div className="col-12">
                      <h1>Get in touch</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Placeat ratione deserunt sed.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <label for="firstname" className="form-label"
                        >First name</label
                      >
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label for="lastname" className="form-label">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-12">
                      <label for="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-12">
                      <label for="message" className="form-label">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        className="form-control"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                    <div className="col-12 mb-3 mb-sm-0">
                      <button type="button" className="btn btn-success">
                        Send Massege
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger ms-3"
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
    {/* <!-- end of Modal-Contact --> */}
    </> );
}
 
export default ModalCantact;