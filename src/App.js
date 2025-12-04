import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import SectionDivider from "./components/section-divider";
import ServiceCards from "./components/service";
import ProjectCards from "./components/projects";
import Stacks from "./components/stacks";
import Footer from "./components/footer";
import Blog from "./components/blog"; 
import "./App.scss";
import "@fontsource/saira-semi-condensed/400.css";
import "@fontsource/saira-semi-condensed/600.css";
import "@fontsource/saira/600.css";


function App() {
 
  return (
    <div className="app">
      <Header />
      
      {/* Connector lines are handled by CSS in .app::before */}
      
      <Hero />
      
      <div className="section service-section">
        <SectionDivider title="SYSTEM_MODULES" desc="// Core Functionalities" />
        <div className="service-card-container">
          <ServiceCards />
        </div>
      </div>

      <div className="section blog-section">
        <SectionDivider title="DEV_LOGS" desc="// Runtime Exceptions & Thoughts" />
        <div className="blog-container">
          <Blog />
        </div>
      </div>

      <div className="section project-section">
        <SectionDivider title="DEPLOYED_NODES" desc="// Project Clusters" />
        <div className="project-card-container">
          <ProjectCards />
        </div>
      </div>


      <div className="section stack-section">
        <SectionDivider title="ENV_VARIABLES" desc="// Dependencies & Tools" />
        <Stacks />
      </div>

      <Footer />
    </div>
  );
}

export default App;