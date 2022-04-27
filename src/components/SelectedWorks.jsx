import React, {useState} from "react";
import arrow3 from "../img/Arrow 3.svg"
import arrow2 from "../img/Arrow 2.svg"
import "../styles/selected-works.css"
import CardWork from "./CardWork";


const SelectedWorks = () => {

    const [cards, setCards] = useState([
        {
            id: 1,
            title: "BATTLESTAR",
            description: " Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.",
            work_tags: ["Brand", "Web", "IOS", "Android"],
            images: ["yellow_bottle.png", "black_bottle.png"]
        },
        {
            id: 2,
            title: "Boich soft",
            description: "Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing .",
            work_tags: ["Brand", "Web", "Logotype"],
            images: ["Boichsoft1.png", "Boichsoft2.png"]
        },
        {
            id: 3,
            title: "Talantis",
            description: " Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.",
            work_tags: ["Web", "High-load"],
            images: ["talantis1.png", "talantis2.png"]
        },
    ])

    return (
        <div className="container-selected-works">
            <div className="header-selected-works"><img src={arrow3}/>Selected works</div>

            {cards.map(card =>
                <CardWork card={card} key={card.id}></CardWork>
            )}
            <button className="all-project-btn">
                All project <img src={arrow2}/>
            </button>
        </div>
    )
}

export default SelectedWorks