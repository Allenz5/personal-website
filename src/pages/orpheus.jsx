import "./project.css";
import orpheus1 from "./../assets/orpheus-1.png"
import orpheus2 from "./../assets/orpheus-2.png"
import orpheus3 from "./../assets/orpheus-3.png"
import orpheus4 from "./../assets/orpheus-4.png"
import FloatingButtonGroup from "../component/floatingButtonGroup.jsx";

function Orpheus() {
    return (
        <div>
            <FloatingButtonGroup />
            <article className="blog-container">
                <div className="blog-content">
                    {/* Title */}
                    <h1 className="blog-title">
                    Orpheus
                    </h1>

                    <div class="blog-image-container">
                        <img src={orpheus1} class="blog-image" />
                    </div>
                    
                    <div className="blog-intro">
                    Can a machine listen to the whispers of your soul?
                    </div>

                    {/* Divider */}
                    <div className="blog-divider" />
                    
                    {/* Subtitle */}
                    <h2 className="blog-subtitle">
                    Intuition
                    </h2>
                    
                    {/* Main Text */}
                    <p className="blog-text">
                    LLMs have been one of the most popular topics in recent years. I truly believe that language is a kind of projection of the real world. After all, language was invented to describe the world. However, language is one-sided, which is why we are working towards training models with multi-modal inputs.
                    </p>

                    <p className="blog-text">
                    Today, neurotechnology has advanced to the point where mental states can be partially monitored as data streams. Just as the FBI uses polygraphs as a supporting source of information, it is intriguing to incorporate brainwave signals as an information source for LLMs. This project is designed to support well-being and also explores how AI can perceive and respond to emotions.
                    </p>

                    <div class="blog-image-container">
                        <img src={orpheus2} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Research
                    </h2>

                    <p className="blog-text">
                    The major challenge in this project lies in identifying emotions through brainwave signals. After researching this topic, I decided to use the EEG Muse 2 device to collect data and apply machine learning to identify emotions based on brainwave signals. I collected from over 20 participants and labeled it with three tags: neutral, peaceful, and anxious.
                    </p>

                    <p className="blog-text">
                    After cleaning the noise and augmenting the data, I experimented with both supervised and unsupervised models and found that a GRU-based neural network achieved the best results, with an accuracy exceeding 95%. Additionally, the model's speed was sufficient to support real-time chat applications.
                    </p>

                    <div class="blog-image-container">
                        <img src={orpheus3} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Implementation
                    </h2>

                    <p className="blog-text">
                    I developed a chatbot that can identify a user's emotional status using the EEG Muse 2 and provide this emotional data to ChatGPT, enabling conversations enhanced by emotional detection. The precision and fluency of conversation are significantly improved in both voice and text chat. This method addresses the gap in emotional perception that cannot be captured through language alone.</p>

                    <div class="blog-image-container">
                        <img src={orpheus4} class="blog-image" />
                    </div>

                    <h2 className="blog-subtitle">
                    Impact
                    </h2>

                    <div class="bullet-group">
                    <ul>
                        <li>Engaged 20+ participants to interact with the system, gathering valuable insights on usability and the emotional accuracy of the AI's responses</li>
                        <li>The most frequently mentioned word in the feedback was "special", highlighting how users found the experience unique and unprecedented. Some even felt it understood their emotions better than they did themselves.</li>
                        <li>50% of participants agreed that the AI bot has potential well-being support value, helping users recognize and manage their emotions</li>
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
    
  export default Orpheus;