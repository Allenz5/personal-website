import React from "react";
import { Link } from "react-router-dom";
import "./works.css";
import project1video from "./../assets/eom.mp4";
import project2video from "./../assets/Orpheus.mp4";
import project3video from "./../assets/tripo.mp4";
import project4video from "./../assets/DreamIn.mp4";

function Work() {
  const projects = [
    {
      title: "Echo of Mobius",
      description: "Use AI agentic system to power digital companions - An AI native RPG Game",
      video: project1video,
      link: "/eom",
    },
    {
      title: "Dream!n Engine",
      description: "A prompt-based AI game editor with no technical barriers",
      video: project4video,
      link: "/dreamin",
    },
    {
      title: "Orpheus",
      description: "An AI mental well-being support chatbot with EEG monitoring",
      video: project2video,
      link: "/orpheus",
    },
    {
      title: "Tripo AI",
      description: "A generative AI platform for 3D Models",
      video: project3video,
      link: "/tripo",
    },
  ];

  return (
    <section className="work">
      <h2 className="work-title">Works.</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <Link to={project.link} key={index} className="work-item">
            <div className="work-video-container">
              <video
                src={project.video}
                title={project.title}
                autoPlay
                loop
                muted
                playsInline
                className="work-video"
              />
            </div>
            <div className="work-item-title">{project.title}</div>
            <p className="work-item-description">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Work;