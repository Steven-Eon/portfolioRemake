import "./index.css";
import "./Aboutme.css";
import githubmark from "./imgs/github-mark-white.svg";
import linkedinmark from "./imgs/In-White-40.png";

function Aboutme() {
    return (
        <div id="aboutMe" className="aboutMe flex flex-col flex-auto items-center justify-center">  
            <div className="titleText">
                <h1>About Me</h1>
            </div>
            <div className="generalText">
                <p>Hi! I'm Steven Truong, a software developer based in Los Angeles, California. I'm currently a student at UC Riverside studying Computer Science. I'm passionate about software development and I'm always looking for new opportunities to learn and grow. I'm primarily proficient in HTML, CSS, Javascript, C++, and I'm always looking to expand my skillset. Feel free to explore my website to learn more about me!</p>
            </div>
            <div className="buttonContainer mt-4 flex flex-row justify-between items-center">
                <a className="text-white font-bold py-2 px-4 rounded-full" href="https://github.com/Steven-Eon" target="_blank" rel="noopener noreferrer">
                    <div className="githubButton flex flex-row items-center justify-between">
                        <img alt="GitHub Mark" className="githubmark"  src={githubmark}/>
                        <span>Visit My Github!</span>
                    </div>
                </a>
                <a className="text-white font-bold py-2 px-4 rounded-full" href="https://www.linkedin.com/in/steven-eon/" target="_blank" rel="noopener noreferrer">
                    <div className="linkedinButton flex flex-row items-center justify-between">                        
                        <img alt="LinkedIn Mark" className="linkedInMark" src={linkedinmark}/>
                        <span>Visit My LinkedIn!</span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Aboutme;