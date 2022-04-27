import React, {useState} from "react";
import "../styles/what-we-do.css"
import arrow2 from "../img/Arrow 2.svg"
import DoCard from "./DoCard";

const WhatWeDo = () => {

    const[doCards,setDoCards] = useState([
        {
            id:1,
            title:"Web development",
            text:"Here are some of the featured projects we’ve been working on. Contact us to get more information about our other work.",
            img:"casual-life-3d-5 1.png"
        },
        {
            id:2,
            title:"UI/UX design",
            text:"Here are some of the featured projects we’ve been working on. Contact us to get more.",
            img:"casual-life-3d-stilus 1.png"
        },
        {
            id:3,
            title:"Mobile apps",
            text:"Here are some of the featured projects we’ve been working on. Contact us to get more information about our other work.",
            img:"casual-life-3d-phone.png"
        },
        {
            id:4,
            title:"Branding",
            text:"Here are some of the featured projects we’ve been working on. Contact us to get more information about our other work.",
            img:"casual-life-3d-4 1.png"
        },
        {
            id:5,
            title:"CRM/ERP systems",
            text:"Here are some of the featured projects we’ve been working on. Contact us to get more information about our other work.",
            img:"casual-life-3d-molecule 1.png"
        },
        {
            id:6,
            title:"High-load projects",
            text:"Here are some of the featured projects we’ve been working on. Contact us to get more information about our other work.",
            img:"casual-life-3d-crystal 1.png"
        },
    ])
    return (
        <div className="wwd-container">
            <div className="wwd-description">
                <div className="wwd-title">What we do</div>
                <div className="wwd-text">
                    Here are some of the featured projects we’ve been working on.
                    Contact us to get more information about our other work and previous clients.
                    Here are some of the featured projects we’ve been working on.
                    From 2018, Boich welcomed some young blood with great ideas.
                    <br/><br/>
                    Small and diverse teams ensure all skills and expertise are
                    available at every step in the cycle influencing .
                </div>
                <button className="wwd-lets-btn">Let's talk  <img src={arrow2}/></button>
            </div>

            <div className="do-card-container">
                {doCards.map(card=>
                <DoCard card={card} key={card.id}/>
                )}
            </div>
        </div>
    )
}
export default WhatWeDo;