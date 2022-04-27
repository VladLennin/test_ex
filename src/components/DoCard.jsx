import React from "react";
import "../styles/do-card.css"

const DoCard = (props) => {
    return (
        <div className="do-card">
            <img src={require("../img/" + props.card.img)}/>
            <div className="do-card-title">{props.card.title}</div>
            <div className="do-card-text">{props.card.text}</div>
        </div>
    )
}
export default DoCard;