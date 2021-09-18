import * as React from "react";
import "../css/styles.css";
import sortGif from "../assets/img/portfolio/sort.gif";
import boardCartGif from "../assets/img/portfolio/boardcart2.gif";
import cinemagoGif from "../assets/img/portfolio/cinemago.gif";
import swishGif from "../assets/img/portfolio/swish.gif";
import sgtGif from "../assets/img/portfolio/sgt.gif";
import covidGif from "../assets/img/portfolio/covid.gif";
import cardioidGif from "../assets/img/portfolio/cardioid2.gif";
import pendulumGif from "../assets/img/portfolio/doublependulum2.gif";
import lissajousGif from "../assets/img/portfolio/lissajous2.gif";
import fourierGif from "../assets/img/portfolio/fourier2.gif";

const PortfolioSection = () => {
  return (
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Applications</h2>
          <hr style={{ width: "80%", color: "#C49B66" }} />
          <h3 class="section-subheading text-muted mt-2">
            The following are a few software and web applications I have built.
          </h3>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item card">
              <div class="portfolio-link">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content text-center">
                    <div class="portfolio-caption-subheading m-3">
                      Interactive visualizer and animation tool for 7 different
                      sorting algorithms
                    </div>
                  </div>
                </div>
                <div class="card-header">
                  <img
                    class="img-fluid"
                    src={sortGif}
                    alt="sorting_visualizer"
                  />
                </div>
              </div>
              <div class="portfolio-caption card-body port-height">
                <div class="portfolio-caption-heading">sorting visualizer</div>
                <div class="portfolio-caption-subheading text-muted mt-2">
                  {/* <!-- JavaScript &bull; HTML5 &bull; CSS3 --> */}
                  <div class="tech-tag p-1 mb-1">JavaScript</div>
                  <div class="tech-tag p-1 mb-1">HTML5</div>
                  <div class="tech-tag p-1 mb-1">CSS3</div>
                </div>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center">
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href=" https://github.com/brandonktran/Sorting_Algorithms_Visualizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    GitHub
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://brandonktran.github.io/Sorting_Algorithms_Visualizer/ "
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Live
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item card">
              <div class="portfolio-link">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content text-center">
                    <div class="portfolio-caption-subheading m-3">
                      A full stack mobile Node and React shopping cart app for a
                      boardshop.
                    </div>
                  </div>
                </div>
                <div class="card-header">
                  <img class="img-fluid" src={boardCartGif} alt="boardcart" />
                </div>
              </div>
              <div class="portfolio-caption card-body port-height">
                <div class="portfolio-caption-heading">boardcart</div>
                <div class="portfolio-caption-subheading text-muted mt-2">
                  {/* <!-- React.js &bull; Node.js &bull; Express.js &bull; PostgreSQL &bull; Bootstrap &bull;
                                                Webpack &bull; Babel &bull; HTML5 &bull; CSS3 &bull; AWS EC2 --> */}
                  <div class="tech-tag p-1 mb-1">React.js</div>
                  <div class="tech-tag p-1 mb-1">Node.js</div>
                  <div class="tech-tag p-1 mb-1">Express.js</div>
                  <div class="tech-tag p-1 mb-1">PostgreSQL</div>
                  <div class="tech-tag p-1 mb-1">Bootstrap</div>
                  <div class="tech-tag p-1 mb-1">Webpack</div>
                  <div class="tech-tag p-1 mb-1">Babel</div>
                  <div class="tech-tag p-1 mb-1">HTML5</div>
                  <div class="tech-tag p-1 mb-1">CSS3</div>
                  <div class="tech-tag p-1 mb-1">AWS EC2</div>
                </div>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center">
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://github.com/brandonktran/boardcart"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    GitHub
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://boardcart.brandonktran.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Live
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item card">
              <div class="portfolio-link">
                <div class="portfolio-hover" id="test">
                  <div class="portfolio-hover-content text-center">
                    <div class="portfolio-caption-subheading m-3">
                      A dynamic mobile-first social networking web application
                      for movie enthusiasts who want to journal and share their
                      movie interests.
                    </div>
                  </div>
                </div>
                <div class="card-header">
                  <img
                    class="card-img cinemago-gif"
                    src={cinemagoGif}
                    alt="cinemago"
                    style={{ height: "20px", width: "100%" }}
                  />
                </div>
              </div>
              <div class="portfolio-caption card-body port-height">
                <div class="portfolio-caption-heading">cinemago</div>
                <div class="portfolio-caption-subheading text-muted mt-2">
                  {/* <!-- React.js &bull; Node.js &bull; Express.js &bull; PostgreSQL &bull; Bootstrap &bull;
                                reactstrap &bull; Webpack &bull; Babel &bull; HTML5 &bull; CSS3 &bull; AWS EC2 --> */}
                  <div class="tech-tag p-1 mb-1">React.js</div>
                  <div class="tech-tag p-1 mb-1">Node.js</div>
                  <div class="tech-tag p-1 mb-1">Express.js</div>
                  <div class="tech-tag p-1 mb-1">PostgreSQL</div>
                  <div class="tech-tag p-1 mb-1">Bootstrap</div>
                  <div class="tech-tag p-1 mb-1">Webpack</div>
                  <div class="tech-tag p-1 mb-1">Babel</div>
                  <div class="tech-tag p-1 mb-1">HTML5</div>
                  <div class="tech-tag p-1 mb-1">CSS3</div>
                  <div class="tech-tag p-1 mb-1">AWS EC2</div>
                </div>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center">
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://github.com/brandonktran/cinemago"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    GitHub
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://cinemago.brandonktran.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Live
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item card">
              <div class="portfolio-link">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content text-center">
                    <div class="portfolio-caption-subheading m-3">
                      A mobile-responsive web app to compare NBA player and team
                      statistics with dynamic and responsive charts for
                      visualization.
                    </div>
                  </div>
                </div>
                <div class="card-header">
                  <img class="img-fluid" src={swishGif} alt="swishify" />
                </div>
              </div>
              <div class="portfolio-caption card-body port-height">
                <div class="portfolio-caption-heading">swishify</div>
                <div class="portfolio-caption-subheading text-muted mt-2">
                  {/* <!-- JavaScript &bull; HTML5 &bull; CSS3 &bull; jQuery &bull; chart.js &bull; Animate on
                                Scroll (AOS) --> */}
                  <div class="tech-tag p-1 mb-1">JavaScript</div>
                  <div class="tech-tag p-1 mb-1">HTML5</div>
                  <div class="tech-tag p-1 mb-1">CSS3</div>
                  <div class="tech-tag p-1 mb-1">jQuery</div>
                  <div class="tech-tag p-1 mb-1">chart.js</div>
                  <div class="tech-tag p-1 mb-1">AOS</div>
                </div>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center">
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://github.com/brandonktran/swishify"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    GitHub
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://brandonktran.github.io/swishify/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Live
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div class="portfolio-item card">
              <div class="portfolio-link">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content text-center">
                    <div class="portfolio-caption-subheading m-3">
                      This is a dynamic web application for teachers who want to
                      record the grades of their students.
                    </div>
                  </div>
                </div>
                <div class="card-header">
                  <img class="img-fluid" src={sgtGif} alt="sgt" />
                </div>
              </div>
              <div class="portfolio-caption card-body port-height">
                <div class="portfolio-caption-heading">student grade table</div>
                <div class="portfolio-caption-subheading text-muted mt-2">
                  {/* <!-- React.js &bull; Node.js &bull; json-server &bull; Bootstrap &bull;
                                Webpack &bull; Babel &bull; HTML5 &bull; CSS3 &bull; AWS EC2 --> */}
                  <div class="tech-tag p-1 mb-1">React.js</div>
                  <div class="tech-tag p-1 mb-1">Node.js</div>
                  <div class="tech-tag p-1 mb-1">json-server</div>
                  <div class="tech-tag p-1 mb-1">Bootstrap</div>
                  <div class="tech-tag p-1 mb-1">Webpack</div>
                  <div class="tech-tag p-1 mb-1">Babel</div>
                  <div class="tech-tag p-1 mb-1">HTML5</div>
                  <div class="tech-tag p-1 mb-1">CSS3</div>
                  <div class="tech-tag p-1 mb-1">AWS EC2</div>
                </div>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center">
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://github.com/brandonktran/sgt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    GitHub
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://sgt.brandonktran.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Live
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="portfolio-item card">
              <div class="portfolio-link">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content text-center">
                    <div class="portfolio-caption-subheading m-3">
                      A simple app utilizing the COVID-19 API to display live
                      information about COVID-19 globally & by country with
                      visual map.
                    </div>
                  </div>
                </div>
                <div class="card-header">
                  <img class="img-fluid" src={covidGif} alt="covid-tracker" />
                </div>
              </div>
              <div
                class="portfolio-caption card-body port-height"
                style={{ height: "185px" }}
              >
                <div class="portfolio-caption-heading">covid-19 tracker</div>
                <div class="portfolio-caption-subheading text-muted mt-2">
                  {/* <!-- JavaScript &bull; HTML5 &bull; CSS3 &bull; COVID API &bull; mappa.js --> */}
                  <div class="tech-tag p-1 mb-1">JavaScript</div>
                  <div class="tech-tag p-1 mb-1">HTML5</div>
                  <div class="tech-tag p-1 mb-1">CSS3</div>
                  <div class="tech-tag p-1 mb-1">mappa.js</div>
                  <div class="tech-tag p-1 mb-1">COVID API</div>
                </div>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center">
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://github.com/brandonktran/COVID-19_Live_Data_Tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    GitHub
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    class="large-link py-1 m-1 col text-center"
                    href="https://brandonktran.github.io/COVID-19_Live_Data_Tracker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Live
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="container mt-5">
        <h3 class="section-subheading text-muted mt-4 text-center">
          Some cool physical and mathematical visualizations I built with p5.js
        </h3>
        <div class="row justify-content-center d-flex flex-wrap">
          <div class="col-md-3 col-6 my-auto">
            <img src={cardioidGif} alt="cardioid" class="card-img" />
          </div>
          <div class="col-md-3 col-6 my-auto">
            <img src={pendulumGif} alt="double_pendulum" class="card-img" />
          </div>
          <div class="col-md-3 col-6 my-auto">
            <img src={lissajousGif} alt="lissajous_curves" class="card-img" />
          </div>
          <div class="col-md-3 col-6 my-auto">
            {/* <!-- <div class="fourier"></div> --> */}
            <img
              src={fourierGif}
              alt="fourier_wheel"
              class="card-img fourier"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
