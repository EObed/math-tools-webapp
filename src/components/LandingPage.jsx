import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
    return (
        <div className="landing-page-div">
            <div className="title-bar">
                <h1>Math Tools Web App</h1>
            </div>
            <div className="description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore voluptatibus expedita saepe pariatur, praesentium
                    corrupti in illum suscipit quidem officiis quae odio
                    repudiandae nostrum optio eius quasi ducimus quisquam esse!
                </p>
            </div>
            <div className="body">
                <button><Link to = "/leap">Leap Year Calculator</Link></button>
                <button><Link to = "/fibonacci">Fibonacci Sequence</Link></button>
                <button><Link to = "/factorial">Factorial Calculator</Link></button>
                <button><Link to = "/kmtom">Kilometres to Miles Convertor</Link></button>
            </div>
        </div>
    );
}

export default LandingPage;
