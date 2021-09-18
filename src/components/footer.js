import * as React from "react";
import "../css/styles.css";

const FooterSection = () => {
  return (
    <footer
      class="footer py-4"
      style={{ backgroundColor: "#212529", color: "#C49B66" }}
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col">Copyright © Brandon Tran 2020</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
