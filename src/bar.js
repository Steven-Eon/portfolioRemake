import "./index.css";
import "./bar.css";

function Bar() {
    const functionCall = (event) => {
        console.log("Function called!");
    }

    const scrollTo = (id) => (event) => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="bar flex flex-row flex-auto shadow-md min-w-full min-h-10 bg-white justify-between">
            <div>
                <h1 className="mt-2 ml-4">Steven Truong</h1>
            </div>
            <div className="flex flex-row item">
                <button className="aButton ml-2 mr-2 pl-2 pr-2" onClick={scrollTo('Hero')} onMouseEnter={functionCall}>Home</button>
                <button className="aButton ml-2 mr-2 pl-2 pr-2" onClick={scrollTo('aboutMe')} onMouseEnter={functionCall}>About Me</button>
                <button className="aButton ml-2 mr-2 pl-2 pr-2" onClick={scrollTo('portfolio')} onMouseEnter={functionCall}>Portfolio</button>
                <button className="aButton ml-2 mr-2 pl-2 pr-2" onClick={scrollTo('footer')} onMouseEnter={functionCall}>Contact Me!</button>
            </div>
        </div>
    );
}

export default Bar;