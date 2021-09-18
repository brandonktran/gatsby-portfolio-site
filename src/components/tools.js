import * as React from "react";
import "../css/styles.css";

const ToolsSection = () => {
  return (
    <section class="page-section" id="tools">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Tools</h2>
          {/* <!-- <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> --> */}
        </div>
        <hr style={{ width: "80%", color: "#C49B66" }} />
        <div class="row" data-aos="zoom-in" data-aos-duration="800">
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-git-plain"></i>
            <h5 class="m-3">git</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-github-plain"></i>
            <h5 class="m-3">GitHub</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-npm-original-wordmark"></i>
            <h5 class="m-3">npm</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-visualstudio-plain"></i>
            <h5 class="m-3">VS Code</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-webpack-plain"></i>
            <h5 class="m-3">Webpack</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-babel-plain"></i>
            <h5 class="m-3">Babel</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-bitbucket-plain"></i>
            <h5 class="m-3">Bitbucket</h5>
          </div>
          {/* <!-- <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
                    <i class="icon devicon-chrome-plain"></i>
                    <h5 class="m-3">Chrome Dev Tools</h5>
                </div> --> */}
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-amazonwebservices-original"></i>
            <h5 class="m-3">AWS</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-ubuntu-plain"></i>
            <h5 class="m-3">Ubuntu</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-nginx-original"></i>
            <h5 class="m-3">NGINX</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-mocha-plain"></i>
            <h5 class="m-3">Mocha</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-jest-plain"></i>
            <h5 class="m-3">Jest</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-redis-plain"></i>
            <h5 class="m-3">Redis</h5>
          </div>
          <div class="col-6 col-md-3 text-center p-4">
            <i class="icon fab fa-figma"></i>
            <h5 class="m-3">Figma</h5>
          </div>
          <div class="col-6 col-md-3 text-center p-4">
            <i class="icon fab fa-slack"></i>
            <h5 class="m-3">Slack</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column text-center p-4">
            <i class="icon devicon-confluence-plain"></i>
            <h5 class="m-3">Confluence</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
