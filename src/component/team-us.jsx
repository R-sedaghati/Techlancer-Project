import img from "../images/team1.jpg";
import img2 from "../images/team2.jpg";
import img3 from "../images/team3.jpg";
import img4 from "../images/team4.jpg";

const TeameUs = () => {
  return (
    <>
      {/* <!-- Teame start --> */}
      <div className="team mb-5" id="teamus">
        <div className="container">
          <div className="text-center py-5">
            <h1 className="text-white f-w600">Our Team</h1>
            <h3 className="text-white f-w500">
              --- <span className="color-1">Who with us</span> ---
            </h3>
          </div>
          <div className="row">
            {/* <!-- team member 1 --> */}
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="team-pic">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Reza Sedaghati</h4>
                  <span>Front-End Developer</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ipsum quos, blanditiis accusamus omnis nam vero
                    ratione est nulla itaque magni assumenda ad deserunt
                    asperiores rem unde ullam natus animi.
                  </p>

                  <div className="social">
                    <a href="">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- team member 2 --> */}
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="team-pic">
                  <img src={img2} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Reza Sedaghati</h4>
                  <span>Front-End Developer</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ipsum quos, blanditiis accusamus omnis nam vero
                    ratione est nulla itaque magni assumenda ad deserunt
                    asperiores rem unde ullam natus animi.
                  </p>

                  <div className="social">
                    <a href="">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- team member 3 --> */}
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="team-pic">
                  <img src={img3} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Reza Sedaghati</h4>
                  <span>Front-End Developer</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ipsum quos, blanditiis accusamus omnis nam vero
                    ratione est nulla itaque magni assumenda ad deserunt
                    asperiores rem unde ullam natus animi.
                  </p>

                  <div className="social">
                    <a href="">
                      <i className="fa-brands fa-linkedin text-white"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-github text-white"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-instagram text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- team member 4 --> */}
            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="team-pic">
                  <img src={img4} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Reza Sedaghati</h4>
                  <span>Front-End Developer</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ipsum quos, blanditiis accusamus omnis nam vero
                    ratione est nulla itaque magni assumenda ad deserunt
                    asperiores rem unde ullam natus animi.
                  </p>

                  <div className="social">
                    <a href="">
                      <i className="fa-brands fa-linkedin text-white"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-github text-white"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-instagram text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Teame End --> */}
    </>
  );
};

export default TeameUs;
