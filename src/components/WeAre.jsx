import React from "react";
import '../styles/we-are.css'
import cool from "../img/3d-hands-fun-and-wild-261 1.svg"
import hands from "../img/3d-hands-fun-and-wild-378 1.svg"
import business from "../img/business-3d-facepalm-man-close-up-5 1.svg"

const WeAre = () => {
    return (
        <div className="container-we-are">
            <div className="header-we-are">We are...</div>
            <div className="content-block">
                <div className="card">
                    <div className="img-frame">
                        <img src={cool}/>
                    </div>
                    <div className="dsc">Cool</div>
                    <div className="text">
                        Small and diverse teams ensure all skills and expertise are available
                        at every step in the cycle influencing .
                    </div>
                </div>

                <div className="card">
                    <div className="img-frame" id="business">
                        <img src={business}/>
                    </div>
                    <div className="dsc" id="business">Professional</div>
                    <div className="text">
                        Small and diverse teams ensure all skills and
                        expertise are available at every step in the life-cycle.
                    </div>
                </div>

                <div className="card">
                    <div className="img-frame">
                        <img src={hands}/>
                    </div>
                    <div className="dsc">Guys</div>
                    <div className="text">
                        Small and diverse teams ensure all skills
                        and expertise are influencing the quality of the final product
                    </div>
                </div>

            </div>
        </div>
    )
}
export default WeAre