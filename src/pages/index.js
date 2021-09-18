import * as React from "react";
import "../css/styles.css";
import NavBar from "../components/navbar";
import HomeSection from "../components/home";
import AboutSection from "../components/about";
import PortfolioSection from "../components/portfolio";
import ResearchSection from "../components/research";
import SkillsSection from "../components/skills";
import ToolsSection from "../components/tools";
import ContactSection from "../components/contact";
import FooterSection from "../components/footer";
import HelmetSection from "../components/helmet";

const IndexPage = () => {
  return (
    <div>
      <HelmetSection></HelmetSection>
      <NavBar></NavBar>
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <PortfolioSection></PortfolioSection>
      <ResearchSection></ResearchSection>
      <SkillsSection></SkillsSection>
      <ToolsSection></ToolsSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </div>
  );
};

export default IndexPage;
