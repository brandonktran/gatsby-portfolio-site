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

const NavBar = () => {
  return (
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
  );
};

export default NavBar;

// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// };

// // data
// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
//   {
//     text: "How to Guides",
//     url: "https://www.gatsbyjs.com/docs/how-to/",
//     description:
//       "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//     color: "#1099A8",
//   },
// ];
