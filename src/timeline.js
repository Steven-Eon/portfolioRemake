import "./index.css";
import "./timeline.css";

function Timeline () {

    return (
        <div className="timeLine flex-col">
            <div>
                <h1 className="timeLineTitle">Timeline</h1>
            </div>
            <div className="timeLineContainer flex flex-col items-center">
                <ul className="timeLineList">
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <h2>2020</h2>
                            <p>Started my journey in Computer Science at UC Riverside</p>
                        </div>
                    </li>
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <p className="timeLineContinuation">Learnt my first programming language in C++.</p>
                        </div>
                    </li>  
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <p className="timeLineContinuation">Picked up C# and Git in my free time.</p>
                        </div>
                    </li>  
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <h2>2022</h2>
                            <p>Started my Student Research Position at UC Riverside, dabbling with Python for data analysis and parsing.</p>
                        </div>
                    </li>
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <p className="timeLineContinuation">Learnt design patterns and proper software development team etiquette through CS100.</p>
                        </div>
                    </li>
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <h2>2023</h2>
                            <p>Took time off to learn HTML, CSS, JS, and Python.</p>
                        </div>
                    </li>
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <p className="timeLineContinuation">Learnt Data Structures and Algorithms with CS144.</p>
                        </div>
                    </li>  
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <h2>2024</h2>
                            <p>Learnt Web Development and Database Management through CS110 and CS166.</p>
                        </div>
                    </li>
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <p className="timeLineContinuation">Graduated from UC Riverside with a Bachelor's in Computer Science</p>
                        </div>
                    </li>
                    <li className="timeLineItem">
                        <div className="timeLineItemContent flex flex-row pb-4">
                            <h2>2025</h2>
                            <p>Stay Tuned!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Timeline;