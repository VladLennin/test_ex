import React from "react";
import '../styles/upper-block.css'
import imac from "../img/imac.jpeg"
import arrow from "../img/Arrow 2.png"
import scroll from "../img/scroll.png"

const UpperBlock = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    BOICH
                </div>
                <div>
                    <button className="contact-btn">Contact</button>
                    <button className="menu-btn">
                        <div className="line"></div>
                    </button>
                </div>

            </div>

            <div className="main">
                <div className="main-content">
                    <div className="content-text1">
                        We are <span>full service</span> development agency
                    </div>
                    <div className="content-text2">
                        Creating easy to use websites that produces results
                    </div>
                    <button className="letstalk-btn">Let's talk<img src={arrow}/></button>
                </div>
                <div className="imac-block">
                    <img className="imac-img" src={imac}/>
                </div>
            </div>
            <div className="scroll-icon">
                <div className="icon"><img src={scroll} /></div>
                <div className="text">Scroll down</div>
            </div>

        </div>

    );
}
export default UpperBlock