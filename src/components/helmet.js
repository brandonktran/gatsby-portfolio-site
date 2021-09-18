import * as React from "react";
import { Helmet } from "react-helmet";

const HelmetSection = () => {
  return (
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
    </Helmet>
  );
};

export default HelmetSection;
