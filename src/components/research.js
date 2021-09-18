import * as React from "react";
import "../css/styles.css";

const ResearchSection = () => {
  return (
    <section class="page-section" id="research">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Research</h2>
          {/* <!-- <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> --> */}
          <hr style={{ width: "80%", color: "#C49B66" }} />
          <h3 class="section-subheading text-muted mt-2">
            The following are a few published experimental device research
            projects I have worked on that also involved heavy data analysis in
            Python and MATLAB
          </h3>
        </div>
        <div class="row">
          <div class="col-md-6 col-12 mb-4">
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col">
                    <img
                      class="card-img cinemago-gif"
                      src="assets/img/research/ultrafast1.png"
                      alt=""
                      style={{ height: "20px" }}
                    />
                  </div>
                  <div class="col">
                    <img
                      class="card-img cinemago-gif"
                      src="assets/img/research/ultrafast2.png"
                      alt=""
                      style={{ height: "20px" }}
                    />
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Ultrafast Magnetization Switching in Nanoscale Magnetic Dots
                </h5>
                <p class="card-text" style={{ fontSize: "0.9rem" }}>
                  Ultrafast magnetization switching at picosecond and
                  sub-picosecond time scales has tremendous technological
                  potential but still poses numerous questions regarding the
                  underlying quantum mechanical phenomena, including the roles
                  of and interactions between the electrons, spins, and phonons
                  (lattice)...
                </p>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center justify-content-center">
                  <a
                    class="large-link py-1 m-1 col-4 text-center"
                    href="https://doi.org/10.1063/1.5098453"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Read Paper
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col">
                    <img
                      class="card-img cinemago-gif"
                      src="assets/img/research/sweat1.png"
                      alt=""
                      style={{ height: "20px" }}
                    />
                  </div>
                  <div class="col">
                    <img
                      class="card-img cinemago-gif"
                      src="assets/img/research/sweat2.png"
                      alt=""
                      style={{ height: "20px" }}
                    />
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  A Wearable Patch For Continuous Analysis of Thermoregulatory
                  Sweat at Rest
                </h5>
                <p class="card-text" style={{ fontSize: "0.9rem" }}>
                  Sweating is commonly associated with exercise and high ambient
                  temperature, but the body naturally sweats more broadly and
                  continuously to regulate core temperature during endogenous
                  metabolic or stress processes, even during sedentary
                  activities like sitting or sleeping. At-rest thermoregulatory
                  sweat...
                </p>
              </div>
              <div class="card-footer bg-white">
                <div class="row text-center justify-content-center">
                  <a
                    class="large-link py-1 m-1 col-4 text-center"
                    href="https://doi.org/10.1038/s41467-021-22109-z"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    Read Paper
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
