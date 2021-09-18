import * as React from "react";
import "../css/styles.css";

const ContactSection = () => {
  return (
    <section class="page-section bg-light" id="contact">
      <div class="container" data-aos="fade-up" data-aos-duration="800">
        <div class="text-center">
          <div class="text-center">
            <h3
              class="text-uppercase section-heading"
              style={{ color: "black" }}
            >
              Contact
            </h3>
          </div>
          <hr style={{ width: "80%", color: "#C49B66" }} />
          <div class="mt-5">
            <h1 class="satisfy accent-color-yellow">Brandon Tran</h1>
            <h4 style={{ color: "#C49B66" }}>Software Engineer</h4>
          </div>
          <div class="row">
            <div class="d-flex flex-wrap align-items-center container justify-content-center my-5 col-md-12 col-sm-12">
              <div class="d-flex justify-content-center mb-5 col-md-4 col-sm-12">
                <p class=" white m-0"> Orange County, CA</p>
              </div>
              <div class="d-flex justify-content-center mb-5 col-md-4 col-sm-12">
                <a
                  class="click link-icon mr-1"
                  style={{ border: "none" }}
                  href="mailto:brandonnkhaitran@gmail.com"
                  aria-label="Email"
                >
                  <i class="fas fa-envelope icon-top"></i>
                </a>
                <p class="white m-0 my-auto">brandonnkhaitran@gmail.com</p>
              </div>
              <div class="d-flex justify-content-center mb-5 col-md-4 col-sm-12">
                <a
                  class="click link-icon"
                  style={{ border: "none" }}
                  href="tel:7148890747"
                  aria-label="Phone"
                >
                  <i class="fas fa-phone-alt icon-top"></i>
                </a>
                <p class="white m-0 my-auto">714-889-0747</p>
              </div>
              <div class="d-flex justify-content-center m-1 mb-5 col-sm-4">
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
                  href="https://drive.google.com/file/d/1WpvWtmIcAkccWynYWurm8WBSPYJ-CFCX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                >
                  <i class="fas fa-file icon-top"></i>
                </a>
              </div>
              {/* <!-- <div class="col-lg-6 my-3 my-lg-0">
                            <a class="btn btn-dark btn-social mx-2 click " href="#!"><i
                                    class="fab fa-linkedin-in"></i></a>
                        </div> --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
