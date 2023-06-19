const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="border-top text-white mt-5">
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4">
              <h5 className="text-uppercase mb-4 fw-bold text-warning">
                Company Name
              </h5>
              <p className="f-w500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quo quam at distinctio facilis delectus ipsum est et
                accusantium, voluptatem alias atque nam dolor aliquam molestiae
                excepturi ea debitis officiis?
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">
              <h5 className="text-uppercase mb-4 fw-bold text-warning">
                Products
              </h5>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Front-End
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Back-End
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Front-End
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Back-End
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Front-End
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4">
              <h5 className="text-uppercase mb-4 fw-bold text-warning">
                Useful links
              </h5>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  About us
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Products
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Our Team
                </a>
              </p>
              <p>
                <a href="#" className="btn btn-danger">
                  Login
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-4">
              <h5 className="text-uppercase mb-4 fw-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="fas fa-envelope me-3 fa-lg"></i>
                Techlancer@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3 fa-lg"></i>+98 930.572.1819
              </p>
              <p>
                <i className="fa-brands fa-github me-3 fa-xl"></i>Techlancer
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="f-w500">
                Copyright ©2023 All rights reserved by :
                <a href="#" className="text-decoration-none">
                  <strong className="text-warning">Techlancer</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-end">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End of footer --> */}
    </>
  );
};

export default Footer;
