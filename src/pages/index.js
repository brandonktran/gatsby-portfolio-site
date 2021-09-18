import * as React from "react";
import "../css/styles.css";
import { Helmet } from "react-helmet";
import profilePicture from "../assets/img/about/profilepicture.jpg";
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

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
];

// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Brandon Tran | Software Engineer</title>
        <meta name="title" content="Brandon Tran | Software Engineer" />
        <meta
          name="description"
          content="Graduated magna cum laude from UC Berkeley with a Bachelor's degree in Physics and Applied Mathematics. Software Engineer at Cox Automotive (Kelley Blue Book)."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandonktran.com/" />
        <meta property="og:title" content="Brandon Tran | Software Engineer" />
        <meta
          property="og:description"
          content="Graduated magna cum laude from UC Berkeley with a Bachelor's degree in Physics and Applied Mathematics. Software Engineer at Cox Automotive (Kelley Blue Book)."
        />
        <meta property="og:image" content="assets/img/bg.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://brandonktran.com/" />
        <meta
          property="twitter:title"
          content="Brandon Tran | Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Graduated magna cum laude from UC Berkeley with a Bachelor's degree in Physics and Applied Mathematics. Software Engineer at Cox Automotive (Kelley Blue Book)."
        />
        <meta property="twitter:image" content="assets/img/bg.jpg" />

        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        {/* <!-- Font Awesome icons (free version)--> */}
        <script
          src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />
        {/* <!-- Google fonts--> */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href="css/styles.css" rel="stylesheet" />
        {/* <!-- AOS --> */}
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> */}

        <script type="text/javascript">
          bg = new Image() bg.src = "./assets/img/bg.jpg"
        </script>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Third party plugin JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        {/* <!-- Contact form JS--> */}
        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>
        {/* <!-- Core theme JS--> */}
        {/* <script src="../scripts.js"></script> */}
        {/* <!-- AOS --> */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </Helmet>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <h1>Brandon Tran</h1>
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ml-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#portfolio">
                  Applications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#research">
                  Research
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#tools">
                  Tools
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
                    <div class="masthead-subheading text-center">
                      Express.js
                    </div>
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
            <a
              class="text-uppercase js-scroll-trigger arrow-begin"
              href="#about"
            >
              <i class="fas fa-angle-double-down fa-4x"></i>
            </a>
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
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

      {/* <!-- Portfolio Grid--> */}
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Applications</h2>
            <hr style={{ width: "80%", color: "#C49B66" }} />
            <h3 class="section-subheading text-muted mt-2">
              The following are a few software and web applications I have
              built.
            </h3>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item card">
                <div class="portfolio-link">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content text-center">
                      <div class="portfolio-caption-subheading m-3">
                        Interactive visualizer and animation tool for 7
                        different sorting algorithms
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
                  <div class="portfolio-caption-heading">
                    sorting visualizer
                  </div>
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
                        A full stack mobile Node and React shopping cart app for
                        a boardshop.
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
                        for movie enthusiasts who want to journal and share
                        their movie interests.
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
                        A mobile-responsive web app to compare NBA player and
                        team statistics with dynamic and responsive charts for
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
                        This is a dynamic web application for teachers who want
                        to record the grades of their students.
                      </div>
                    </div>
                  </div>
                  <div class="card-header">
                    <img class="img-fluid" src={sgtGif} alt="sgt" />
                  </div>
                </div>
                <div class="portfolio-caption card-body port-height">
                  <div class="portfolio-caption-heading">
                    student grade table
                  </div>
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
            Some cool physical and mathematical visualizations I built with
            p5.js
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
    </div>
  );
};

export default IndexPage;

{
  /* <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main> */
}
