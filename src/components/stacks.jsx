import React from "react";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  DjangoIcon,
  PythonIcon,
  PostgreSQLIcon,
  LinuxIcon,
  GitIcon,
  FastAPIIcon,
  NodeJsIcon,
  MongoDBIcon,
  NestJsIcon,
  ExpressJsIcon,
  TypeScriptIcon,
  RustIcon,
} from "./svgs";

// Categorized for a "System Spec" feel
const systemSpecs = {
  languages: [
    { name: "JavaScript", icon: <JSIcon /> },
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "Python", icon: <PythonIcon /> },
    { name: "Rust", icon: <RustIcon /> },
    { name: "HTML", icon: <HTMLIcon /> },
    { name: "CSS", icon: <CSSIcon /> },
  ],
  runtimes_frameworks: [
    { name: "NodeJs", icon: <NodeJsIcon /> },
    { name: "Nest Js", icon: <NestJsIcon /> },
    { name: "Express Js", icon: <ExpressJsIcon /> },
    { name: "FastAPI", icon: <FastAPIIcon /> },
    { name: "Django", icon: <DjangoIcon /> },
    { name: "ReactJS", icon: <ReactIcon /> },
  ],
  infrastructure_tools: [
    { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
    { name: "MongoDB", icon: <MongoDBIcon /> },
    { name: "Linux", icon: <LinuxIcon /> },
    { name: "Git", icon: <GitIcon /> },
  ]
};

const StackGroup = ({ title, items }) => (
  <div className="stack-group">
    <h3 className="stack-group-title">{`// ${title}`}</h3>
    <div className="stack-grid">
      {items.map((stack) => (
        <div className="stack-module" key={stack.name}>
          <div className="stack-icon">{stack.icon}</div>
          <span className="stack-name">{stack.name}</span>
          <span className="stack-status">::INSTALLED</span>
        </div>
      ))}
    </div>
  </div>
);

const Stacks = () => (
  <div className="stacks-container">
    <StackGroup title="LANGUAGES" items={systemSpecs.languages} />
    <StackGroup title="RUNTIMES_&_FRAMEWORKS" items={systemSpecs.runtimes_frameworks} />
    <StackGroup title="INFRASTRUCTURE" items={systemSpecs.infrastructure_tools} />
  </div>
);

export default Stacks;