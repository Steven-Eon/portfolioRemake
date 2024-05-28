import { useEffect, useState, useRef } from "react";
import "./hero.css";
import "./index.css";
import {init} from "./animations/scrollingText.js"
import portrait from "./imgs/portrait.jpg";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

function Hero() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    
    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(FOG({
            el: myRef.current,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xe1e1e1,
            midtoneColor: 0xbebebe,
            lowlightColor: 0xe1e1e1,
            baseColor: 0xffffff,
            blurFactor: 0.90,
            speed: 5.00,
            zoom: 0.50
        }));
        console.log("Hero mounted")
        init();
    }
    return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    
    return (
        <div id="Hero" className="hero flex flex-auto items-center justify-center" ref={myRef}>
            <div className="flex flex-col distribute">
                <div class="evenDistribute animationOne mb-1">
                <p>Hello, I'm Steven Truong. I'm a <span class="textAdder"></span><span class="tickerBar"></span></p>
                </div>
                <div class="evenDistribute mt-1">
                    <p>Feel free to explore my website!</p>
                </div>
            </div>
            <div className="flex distribute items-center justify-center">
                <img className="portrait" alt="Self-Portrait." src={portrait} />
            </div>
        </div>
        

    );
}

export default Hero;