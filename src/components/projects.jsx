import React from "react";
import {
  RideByImg,
  StudyroomsImg,
  EvotingImg,
  GeoScopeImg,
  SocialImg,
  ShoesJetImg,
  WeaverImg,      
  GenieImg,       
  TalkNativeImg 
} from "./images";

const ProjectCard = ({
  image,
  type,
  title,
  desc,
  tags = [],
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="project-card">
      <div className="project-header">
        {/* Thumbnail Image */}
        <div className="project-thumb">
          {image}
        </div>
        
        {/* Title Group */}
        <div className="project-title-group">
          <h4>{title}</h4>
          <span className="project-type">[{type.toUpperCase()}]</span>
        </div>
      </div>

      <div className="project-body">
        <p>{desc}</p>
      </div>

      <div className="project-footer">
        <div className="project-tags">
          {tags.slice(0, 3).map((tag) => ( // Show max 3 tags to save space
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={demoUrl} target="_blank" rel="noreferrer">
            {'>'} LIVE
          </a>
          <a href={codeUrl} target="_blank" rel="noreferrer">
            {'>'} SRC
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectCards = () => {
  const projects = [
    {
      image: <TalkNativeImg />,
      type: "ed-tech",
      title: "TalkNative",
      desc: "AI-driven language learning platform. Provides real-time, autonomous grammar correction and fluency analytics.",
      tags: ["Pydantic AI", "AI/LLM", "ASR/TTS"],
      demoUrl: "https://talknative-frontend-719322122218.us-central1.run.app/",
      codeUrl: "https://github.com/jaypee15/talknative",
    },
    {
      image: <WeaverImg />,
      type: "AI productivity",
      title: "Weaver",
      desc: "Workflow orchestration tool designed to thread disparate data sources into a unified documentation stream/API endpoint. Optimizes team knowledge transfer.",
      tags: ["LangChain", "Vector Embedding", "AI/LLM"],
      demoUrl: "https://tryweaver.app",
      codeUrl: "https://github.com/jaypee15/weaver",
    },
    {
      image: <GenieImg />,
      type: "AI Agent",
      title: "Genie",
      desc: "Deep Agent that autonomously discovers and ranks professional opportunities tailored to a user's specific goals",
      tags: ["Vector Embeddng", "AI/LLM", "Automation"],
      demoUrl: "https://usegenie.xyz",
      codeUrl: "https://github.com/jaypee15/genie",
    },
    {
      image: <ShoesJetImg />,
      type: "ecommerce",
      title: "Shoes Jet",
      desc: "Full-stack ecommerce with product browsing, cart management, favorites, and secure checkout flows.",
      tags: ["NodeJs", "MongoDB", "Express"],
      demoUrl: "https://shoes-jet.vercel.app/",
      codeUrl: "https://github.com/jaypee15/nextgen-shoes-ecommerce-backend",
    },
    {
      image: <StudyroomsImg />,
      type: "ed-tech",
      title: "Study Rooms",
      desc: "Virtual hangout for students to create topic-based rooms and collaborate in real-time.",
      tags: ["Django", "Python", "SQLite"],
      demoUrl: "https://study-rooms.onrender.com",
      codeUrl: "https://github.com/jaypee15/study_rooms",
    },
    {
      image: <RideByImg />,
      type: "mobility",
      title: "Ride-By",
      desc: "Carpooling platform connecting commuters to share rides, split costs, and reduce carbon footprint.",
      tags: ["NestJs", "Redis", "TypeScript"],
      demoUrl: "https://traveazi.onrender.com/api/docs",
      codeUrl: "https://github.com/jaypee15/ride-by",
    },
    {
      image: <EvotingImg />,
      type: "gov-tech",
      title: "E-Voting API",
      desc: "Secure API for electronic voting ensuring voter anonymity, data integrity, and real-time tallies.",
      tags: ["NodeJs", "Security", "MongoDB"],
      demoUrl: "https://e-voting-amber.vercel.app/",
      codeUrl: "https://github.com/jaypee15/E-voting",
    },
    {
      image: <GeoScopeImg />,
      type: "networking",
      title: "GeoScope IP",
      desc: "High-performance IP lookup tool providing geolocation, ISP, and timezone data.",
      tags: ["Rust", "Axum", "GeoLite2"],
      demoUrl: "https://github.com/jaypee15/Geo-Crabby-IP",
      codeUrl: "https://github.com/jaypee15/Geo-Crabby-IP",
    },
    {
      image: <SocialImg />,
      type: "social",
      title: "Social API",
      desc: "Robust backend for social platforms supporting posts, likes, user relationships, and feeds.",
      tags: ["FastAPI", "Python", "OpenAPI"],
      demoUrl: "https://fastapi-social.onrender.com/docs",
      codeUrl: "https://github.com/jaypee15/fastapi-socialmedia",
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}
    </>
  );
};

export default ProjectCards;