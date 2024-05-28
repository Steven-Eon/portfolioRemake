import "./index.css";
import "./credentials.css";
import { init } from "./animations/scrollingText2.js";
import { useEffect } from "react";

function Credentials() {
    useEffect(() => {
        init();
    }, []);

    return (
        <div className="credentials flex justify-around">
            <div>
                <div className="credentialHeader">
                    <h1 className="credentialTitle">My Credentials</h1>
                </div>
                <div className="credentialsContainer">
                    <ul>
                        <li className="credentialsItem">Currently aiming for HTB CPTS and CBBH certification.</li>
                        <li className="credentialsItem">Coursera (Meta) - Intro to Back-End Development.</li>
                        <li className="credentialsItem">Coursera (Meta) - Intro to Front-End Development.</li>
                    </ul>
                    
                </div>
            </div>
            <div>
                <div className="funFactsHeader">
                    <h1 className="funFactsTitle">Fun Facts About Steven</h1>
                </div>
                <div className="funFactsContainer">
                    <ul>
                        <li className="funFactItem">Steven is a Lakers fan, his core memory was the 2010 NBA Finals.</li>
                        <li className="funFactItem">Steven sucks at League of Legends, but he still plays it.</li>
                        <li className="funFactItem">While we're at it, Steven also sucks at <span class="textAdder1"></span><span class="tickerBar"></span></li>
                        <li className="funFactItem">Steven plays the drums (but don't ask him to improvise).</li>
                        <li className="funFactItem">Steven is decent at cooking (he blew up a microwave once).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Credentials;
