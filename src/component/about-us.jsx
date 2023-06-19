import img from "../images/Code typing-bro.svg";
import Typed from "typed.js";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    var typed = new Typed("#About", {
      strings: ["We're Freelancing"],
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
      {/* <!-- About start --> */}
      <div className="text-center mt-5" id="aboutt">
        <h1 className="text-white f-w600">About Us</h1>
        <h3 className="text-white f-w500">
          --- <span className="color-1">Who We're</span> ---
        </h3>
      </div>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={img}
                className="img-fluid img-thumbnail"
                alt="profile"
                style={{ backgroundColor: "#1e1c1e", borderColor: "#1e1c1e" }}
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h4 className="text-white f-w600">
                Hola !<span className="color-1 fs-3" id="About"></span>
              </h4>
              <p className="text-white f-w500 fs-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                harum.
              </p>
              <p className="text-white f-w500 fs-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus incidunt a asperiores vero porro?
              </p>
              <p className="text-white f-w500 fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                recusandae sequi alias quas, ipsa voluptates?
              </p>
              <p className="text-white f-w500 fs-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus animi eaque qui, aperiam ducimus saepe culpa esse
                laudantium non molestias possimus odit quis fuga laborum tenetur
                architecto dolor! Voluptate, numquam.
              </p>
              <div>
                <ul className="list-inline">
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
      </section>
      {/* <!-- About End --> */}
    </>
  );
};

export default AboutUs;
