import React from "react";
import {DatabaseIcon, CodeIcon,SecurityIcon, IntegrationIcon,} from "./svgs";

const ServiceCard = ({ type, title, desc, index }) => {
  return (
    <div className="service-card" data-index={index}>
      <div className="service-card-icon">
        {type === "server-side" ? (
          <DatabaseIcon />
        ) : type === "security" ? (
          <SecurityIcon />
        ) : type === "integration" ? (
          <IntegrationIcon />
        )  : (
          <CodeIcon />
        )}
      </div>
      <h3>{title}</h3>
      <p className="type5" dangerouslySetInnerHTML={{ __html: desc }}></p>
    </div>
  );
};

export const ServiceCards = () => {
  return (
    <>
      <ServiceCard
        index="01"
        type="server-side"
        title="Server-Side Expertise"
        desc="AI integration, Business logic, APIs Database Management"
      />
      <ServiceCard
        index="02"
        type="security"
        title="System Security"
        desc="Vulnerability protection, query optimization, and rigorous logging and monitoring."
      />
      <ServiceCard
        index="03"
        type="integration"
        title="DevOps & Deploy"
        desc="Server config, CI/CD pipelines, and horizontal scaling strategies."
      />
    </>
  );
};

export default ServiceCards;