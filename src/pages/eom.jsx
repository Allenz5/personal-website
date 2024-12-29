import "./project.css";
import eom1 from "./../assets/eom-1.png"
import eom2 from "./../assets/eom-2.png"
import eom3 from "./../assets/eom-3.png"
import eom4 from "./../assets/eom-4.png"
import eom5 from "./../assets/eom-5.png"
import FloatingButtonGroup from "../component/floatingButtonGroup.jsx";

function Eom() {
    return (
        <div>
            <FloatingButtonGroup />
            <a href="https://echoofmobius.com" target="_blank" rel="noopener noreferrer">
                <button className="blog-btn">Visit EoM.com</button>
            </a>
            <article className="blog-container">
                <div className="blog-content">
                    {/* Title */}
                    <h1 className="blog-title">
                    Echo of Mobius
                    </h1>

                    <div class="blog-image-container">
                        <img src={eom1} class="blog-image" />
                    </div>
                    
                    {/* Introduction */}
                    <div className="blog-intro">
                    Who wants their digital companions stay in a box?
                    </div>
                    
                    {/* Divider */}
                    <div className="blog-divider" />
                    
                    {/* Subtitle */}
                    <h2 className="blog-subtitle">
                    Intuition
                    </h2>
                    
                    {/* Main Text */}
                    <p className="blog-text">
                    Virtual companions have always been a hot topic in video games. From the early days of Tamagotchi to the popular Genshin Impact in recent years, as well as the enduring Pokémon series, all these popular games provide digital companions for players. But who wants their digital companions to remain in a programmed body without a soul? Imagine your Pokémon discussing adventure experiences with you, talking about battle strategies, and even having its own temper.
                    </p>

                    <div class="blog-image-container">
                        <img src={eom2} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Research
                    </h2>

                    <p className="blog-text">
                    There are several goals for our agentic system: to make digital companions vivid and capable of interacting naturally with their environment, the system must include a perception module to sense the environment and make decisions accordingly; to ensure each digital companion is unique, the system must include data modules that can represent individual characteristics.
                    </p>

                    <div class="blog-image-container">
                        <img src={eom3} class="blog-image" />
                    </div>

                    <div class="bullet-group">
                    <ul>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>Perception</span>: The Perception module enables the agentic system to monitor the current environment. It also includes a flash memory component to facilitate a better understanding of the environment.</li>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>Memory</span>: The Memory module stores the digital companion's long-term memory. It includes summaries of experiences and knowledge, which are used to compare and validate actions.</li>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>Emotion and Personality</span>: This module stores both the temporary state and persistent traits of a digital companion, which can influence decision making.</li>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>Decision</span>: The Decision module communicates with other modules to perform internal and external actions. These actions include updating memory, altering emotional states, learning new skills, saying something, and more.</li>
                    </ul>
                    </div>

                    <div class="blog-image-container">
                        <img src={eom4} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Implementation
                    </h2>

                    <p className="blog-text">
                    We built the game with Unity. From our market research, we identified turn-based battles and CRPG text-pic adventures as the best gameplay modes because of the broad audience and creative space.
                    </p>

                    <p className="blog-text">
                    On the character side, we used APIs from both OpenAI and Anthropic. GPT excelled at command interactions, while Claude generated more engaging narratives and dialogues. Each character was powered by our AI agentic system. On the art side, we fine-tuned SDXL (later replaced with Flux) using LoRA techniques.
                    </p>

                    <div class="blog-image-container">
                        <img src={eom5} class="blog-image" />
                    </div>

                    <p className="blog-text">
                    By storing all the data on the fly our game also become a content community. Players can not only play with their AI virtual pet but also meet or fight with others' pets, take on others' adventure. It features a user-generated content ecosystem that allows players to bring their imaginations to life while experiencing infinite content collectively created by the community.
                    </p>

                    <div class="blog-youtube-container">
                    <iframe 
                        src="https://www.youtube.com/embed/izohRj-1sfM?start=2" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    </div>

                    <h2 className="blog-subtitle">
                    Impact
                    </h2>

                    <div class="bullet-group">
                    <ul>
                        <li>Launched in late October, now with 2,000+ users and 300+ paying players, still growing rapidly. It has established a sustainable business model with an impressive 90% profit margin</li>
                        <li>Over 20,000 unique characters created, making it the game with the most playable characters worldwide</li>
                        <li>Achieved a second-week retention rate of 26% and an average session time of 30+ minutes</li>
                        <li>Over 30 streamers featured the game, reaching 50k+ views across platforms</li>
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
  
export default Eom;