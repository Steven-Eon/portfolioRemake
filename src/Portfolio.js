import "./index.css";
import "./Portfolio.css";
import animationSite from "./imgs/animationsSite.png";
import portfolioSite from "./imgs/oldportfolio.png";
import signin from "./imgs/signin.png";

function Portfolio() {
    
        return (
            <div id="portfolio" className="portfolio flex-col">
                <div className="portfolioHeader">
                    <h1 className="portfolioTitle text-center">My Portfolio</h1>
                </div>
                <div className="portfolioContainer flex-col">
                    <div className="portfolioRow flex flex-row items-center justify-center">
                    <div className="portfolioItem shadow-lg">
                            <div className="portfolioItemImage line border-b-slate border-b-4">
                                <img className="object-center" src={animationSite} alt="Project 1 preview."/>
                            </div>
                            <div>
                                <hr class="linebreak w-24 h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                            </div>
                            <div className="portfolioItemCaption">
                                <div>                                
                                    <h2 className="pt-4 font-extrabold text-base">Animation Website</h2>
                                    <p>Trying to look for text animations? Well look no further! Select from the animations that I have created.</p>
                                </div>
                                <a className="mb-4 portfolioCaption text-white bg-black font-bold py-2 px-2 rounded-full" href="https://steven-eon.github.io/WebsiteAnimations/" target="_blank" rel="noopener noreferrer">Check it out!</a>
                            </div>
                        </div>
                        <div className="portfolioItem shadow-lg">
                            <div className="portfolioItemImage line border-b-slate border-b-4">
                                <img className="object-center" src={portfolioSite} alt="Project 2 preview."/>
                            </div>
                            <hr class="linebreak w-24 h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                            <div className="portfolioItemCaption">
                                <div>                                
                                    <h2 className="pt-4 font-extrabold text-base">Portfolio Website (FORMER)</h2>
                                    <p>My former portfolio website, was under construction -- but is currently in haitus as I learn more.</p>
                                </div>
                                <a className="mb-4 portfolioCaption text-white bg-black font-bold py-2 px-2 rounded-full" href="https://steven-eon.github.io/Portfolio-Project/" target="_blank" rel="noopener noreferrer">Check it out!</a>
                            </div>
                        </div>
                        <div className="portfolioItem shadow-lg">
                            <div className="portfolioItemImage line border-b-slate border-b-4">
                                <img className="object-center" src={signin} alt="Project 3 preview."/>
                            </div>
                            <hr class="linebreak w-24 h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
                            <div className="portfolioItemCaption">
                                <div>                                
                                    <h2 className="pt-4 font-extrabold text-base">Sign-In Page CSS</h2>
                                    <p>My first attempt at creating a sign-in page utilizing HTML and CSS.</p>
                                </div>
                                <a className="mb-4 portfolioCaption text-white bg-black font-bold py-2 px-2 rounded-full" href="https://steven-eon.github.io/SignUpPageProject/" target="_blank" rel="noopener noreferrer">Check it out!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Portfolio;
