import * as React from "react";
import "../css/styles.css";

const HomeSection = () => {
  return (
    <header class="masthead">
      <div class="container">
        <div
          class="masthead-heading text-uppercase"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Brandon Tran
        </div>
        <div
          class="masthead-subheading"
          data-aos="fade-up"
          data-aos-duration="800"
          style={{ color: "#C49B66" }}
        >
          Software Engineer
        </div>
        <div class="row justify-content-center">
          <div class="masthead-subheading" style={{ fontSize: "1.5rem" }}>
            Skilled in
          </div>
          <h1 class="ms-header__title text-center">
            <div class="ms-slider">
              <ul class="ms-slider__words" style={{ color: "#C49B66" }}>
                <li class="ms-slider__word">
                  <div class="masthead-subheading text-center">
                    JavaScript (ES5 & ES6)
                  </div>
                </li>
                <li class="ms-slider__word">
                  <div class="masthead-subheading text-center">React.js</div>
                </li>
                <li class="ms-slider__word">
                  <div class="masthead-subheading text-center">Node.js</div>
                </li>
                <li class="ms-slider__word">
                  <div class="masthead-subheading text-center">Express.js</div>
                </li>
                <li class="ms-slider__word">
                  <div class="masthead-subheading text-center">Python</div>
                </li>
                {/* <!-- This last word needs to duplicate the first one to ensure a smooth infinite animation --> */}
                <li class="ms-slider__word">
                  <div class="masthead-subheading text-center">
                    JavaScript (ES5 & ES6)
                  </div>
                </li>
              </ul>
            </div>
          </h1>
        </div>
        <div class="mt-5 pt-5">
          <a class="text-uppercase js-scroll-trigger arrow-begin" href="#about">
            <i class="fas fa-angle-double-down fa-4x"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomeSection;
