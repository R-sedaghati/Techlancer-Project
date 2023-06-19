import img from "../images/Coding workshop-pana.svg";
import Typed from "typed.js";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    var typed = new Typed("#typed", {
      strings: ["Freelancing"],
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      startDelay: 500,
    });
  });
  return (
    <>
      <header id="home">
        {/* <!-- Navbar start --> */}
        <nav className="navbar navbar-expand-lg fixed-top r-nav sticky">
          <div className="container">
            <a href="#" className="navbar-brand f-w600">
              Freelan<span className="color-1">cing</span>
            </a>
            <button
              title="button"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarId"
            >
              <span>
                <i className="fas fa-bars hamburger"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarId">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#aboutt" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services-id" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#teamus" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#footer" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item Login">
                  <a
                    href="#footer"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#loginmodal"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Navbar end --> */}
        {/* <!-- Banner start --> */}
        <div
          className="titlee d-flex align-items-center justify-content-between"
          style={{ height: "100vh" }}
        >
          <div className="content-box">
            <div className="text-1">Hi There</div>
            <div className="text-2">Welcome to</div>
            <div className="text-4">
              <span id="typed"></span>
            </div>
            <div className="text-3">Hope you enjoy it</div>
            <a
              href=""
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#contactmodal"
            >
              Contact
            </a>
          </div>
          <img className="image" src={img} width="600px" alt="" />
        </div>
        {/* <!-- Banner End --> */}
      </header>
    </>
  );
};

export default Header;