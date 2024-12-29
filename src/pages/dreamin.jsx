import "./project.css";
import dreamin1 from "./../assets/dreamin-1.png"
import dreamin2 from "./../assets/dreamin-2.png"
import dreamin3 from "./../assets/dreamin-3.png"
import dreamin4 from "./../assets/dreamin-4.png"
import FloatingButtonGroup from "../component/floatingButtonGroup.jsx";

function Dreamin() {
    return (
        <div>
            <FloatingButtonGroup />
            <article className="blog-container">
                <div className="blog-content">
                    {/* Title */}
                    <h1 className="blog-title">
                    Dream!n Engine
                    </h1>

                    <div class="blog-image-container">
                        <img src={dreamin1} class="blog-image" />
                    </div>
                    
                    <div className="blog-intro">
                    AI Copilot Assisting in Game Development
                    </div>

                    {/* Divider */}
                    <div className="blog-divider" />
                    
                    {/* Subtitle */}
                    <h2 className="blog-subtitle">
                    Intuition
                    </h2>
                    
                    {/* Main Text */}
                    <p className="blog-text">
                    Video games are one of the most popular content mediums worldwide; however, game development often requires expertise in coding and art, which poses a significant barrier for content creators.
                    </p>

                    <p className="blog-text">
                    With the rise of LLMs, we see an opportunity to democratize game development. While it may be too early to discuss a fully AI-native game engine (some of my friends are working on this), we believe it is entirely feasible to create a game editor with a built-in AI copilot to simplify the development of certain types of games.</p>

                    <div class="blog-image-container">
                        <img src={dreamin2} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Research
                    </h2>

                    <p className="blog-text">
                    After conducting thorough research, we selected a detective game as the first template in our editor. Detective games can offer a fresh player experience by only altering the storylines and characters, which aligns well with the strengths of AI in generating narrative-driven content.
                    </p>

                    <p className="blog-text">
                    To ensure the AI-generated detective reasoning process is both engaging and feasible, we devised a zero-shot AI workflow inspired by the design patterns of classic detective stories. This approach breaks the process into structured steps and makes each request have a clearer purpose and better quality:
                    </p>

                    <div class="blog-image-container">
                        <img src={dreamin3} class="blog-image" />
                    </div>

                    <div class="bullet-group">
                    <ul>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>Core Puzzle Design</span>: Creating the central puzzle that players must solve. This puzzle is the source of enjoyment as well as the primary challenge.</li>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>Cotent Generation</span>: Generating the full story of the detective game, including: background, clues, the final question, and the correct answer.</li>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>NPC Creation</span>: Creating necessary NPCs, including dialogue scripts and character designs.</li>
                        <li><span style={{ color: 'black', fontWeight: 'bold' }}>Validation</span>: Performing a reasoning process based on the generated clues and storyline to verify the logical consistency and completeness of the game design.</li>
                    </ul>
                    </div>

                    <div class="blog-image-container">
                        <img src={dreamin4} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Implementation
                    </h2>

                    <p className="blog-text">
                    The editor was built using Unity. Its core feature is a conversational interface, where an AI copilot guides the creator by asking questions and generating corresponding game assets based on their responses.
                    </p>

                    <p className="blog-text">
                    In the backend, we have several fine-tuned SDXL image models and an AI workflow powered by GPT-3.5 to support the AI copilot on the front end. By storing all data on the fly, our game can be distributed and accessed through a URL.
                    </p>

                    <div class="blog-youtube-container">
                    <iframe 
                        src="https://www.youtube.com/embed/b8Zba4JSr6g?start=2" 
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
                        <li>Backed by Brown Venture Prize and Miracle Plus (Y Combinator China)</li>
                        <li>Within 3 months of beta testing, over 3,000 users were involved, and 3,200+ games were created</li>
                        <li>Logged over 200,000 gameplay sessions</li>
                        <li>The most popular YouTube video about our project garnered over 200k views</li>
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
    
  export default Dreamin;