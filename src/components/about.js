import * as React from "react";
import "../css/styles.css";
import { Helmet } from "react-helmet";
import profilePicture from "../assets/img/about/profilepicture.jpg";

const AboutSection = () => {
  return (
    <section class="page-section" id="about">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">About</h2>
        </div>
        <hr style={{ width: "80%", color: "#C49B66" }} />
        <div class="container">
          <div class="row my-5" data-aos="fade-up" data-aos-duration="800">
            <div class="col-12 col-lg-4 text-center mb-3 my-4">
              <img
                style={{ borderRadius: "5px" }}
                src={profilePicture}
                alt=""
              />
            </div>
            <div class="col-12 col-lg-8 my-auto">
              <h1 class="title">Hello, I'm Brandon —</h1>
              <p class="content text-muted">
                Ever since I was a child, I've been solving problems.
              </p>
              <p class="content text-muted">
                Software Engineer at{" "}
                <a href="https://www.coxautoinc.com/">Cox Automotive</a> (
                <a href="https://www.kbb.com/">Kelley Blue Book</a>).
              </p>
              {/* <!-- <p class="content text-muted">Full-stack software engineer who loves
                            to develop applications using
                            <b>React.js</b>, <b>Node.js</b>, <b>Express</b>, and <b>PostgreSQL</b>.
                        </p>
                        <p class="content text-muted">Currently, I am using <b>Next.js</b> (<b>React.js</b>),
                            <b>TypeScript</b> and <b>Redux</b> on the front-end, and
                            <b>Python</b>, <b>FastAPI</b>, and <b>MongoDB</b> in the back-end.
                        </p> --> */}
              <p class="content text-muted">
                Graduated magna cum laude from
                <b>UC Berkeley</b> with a Bachelor's degree in <b>Physics</b>{" "}
                and
                <b>Applied Mathematics</b>.
              </p>
              <div class=" d-flex justify-content-center mb-5 col-lg-5 mt-4">
                <a
                  class="click link-icon m-auto"
                  href="https://github.com/brandonktran"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <i class="fab fa-github icon-top"></i>
                </a>
                <a
                  class="click link-icon m-auto"
                  href="https://www.linkedin.com/in/brandonktran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i class="fab fa-linkedin icon-top"></i>
                </a>
                <a
                  class="click link-icon m-auto"
                  href="tel:7148890747"
                  aria-label="Phone"
                >
                  <i class="fas fa-phone-alt icon-top"></i>
                </a>
                <a
                  class="click link-icon m-auto"
                  href="mailto:brandonnkhaitran@gmail.com"
                  aria-label="Email"
                >
                  <i class="fas fa-envelope icon-top"></i>
                </a>
                <a
                  class="click link-icon m-auto"
                  href="https://drive.google.com/file/d/1WpvWtmIcAkccWynYWurm8WBSPYJ-CFCX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                >
                  <i class="fas fa-file icon-top"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
