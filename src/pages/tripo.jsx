import "./project.css";
import tripo1 from "./../assets/tripo-1.png";
import tripo2 from "./../assets/tripo-2.png";
import tripo3 from "./../assets/tripo-3.png";
import FloatingButtonGroup from "../component/floatingButtonGroup.jsx";

function Tripo() {
    return (
        <div>
            <FloatingButtonGroup />
            <a href="https://tripo3d.ai" target="_blank" rel="noopener noreferrer">
                <button className="blog-btn">Visit tripo3d.ai</button>
            </a>
            <article className="blog-container">
                <div className="blog-content">
                    {/* Title */}
                    <h1 className="blog-title">
                    Tripo AI
                    </h1>

                    <div class="blog-image-container">
                        <img src={tripo2} class="blog-image" />
                    </div>
                    
                    {/* Introduction */}
                    <div className="blog-intro">
                    Create Your First 3D Model with Text and Image in Seconds.
                    </div>
                    
                    {/* Divider */}
                    <div className="blog-divider" />
                    
                    {/* Subtitle */}
                    <h2 className="blog-subtitle">
                    Introduction
                    </h2>
                    
                    {/* Main Text */}
                    <p className="blog-text">
                    Tripo AI provides a 3D model generative service for everyone. It allows users to generate 3D models based on prompts or images within a few seconds.
                    </p>

                    <div class="blog-image-container">
                        <img src={tripo3} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Work
                    </h2>

                    <p className="blog-text">
                    I was part of the software engineering team. Together, we built a backend server based on a K8s cluster to support resource management and the use of our generative service. We also developed various portals, including an API platform, an official website, a Discord bot, and plugins for Blender, UE4, and Unity 3D, to ensure our service was as user-friendly as possible. We also provided many supplementary features, such as face reduction, stylization, and format transformation, to enable a seamless AI-native workflow.
                    </p>

                    <div class="blog-image-container">
                        <img src={tripo1} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                        Impact
                    </h2>

                    <div class="bullet-group">
                    <ul>
                        <li>Reached over 300,000 users</li>
                        <li>Closed Series A funding with $15 million</li>
                        <li>Achieved state-of-the-art (SOTA) performance in 3D generative AI</li>
                        <li>Gained over 1 trillion exposures across platforms</li>
                    </ul>
                    </div>

                    
                </div>
            </article>

            <br></br>
            <br></br>
            <br></br>
        </div>
    );
  }
    
  export default Tripo;