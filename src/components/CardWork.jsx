import React, {useState} from "react";
import arrow2 from "../img/Arrow 2 — black.svg";
import "../styles/selected-works.css"

const CardWork = (props) =>{

    return(
        <div>
            <div className="work-card">
                <div className="work-card-content">
                    <div className="title-work">
                        {props.card.title}
                    </div>
                    <div className="work-dscrp">
                        {props.card.description}
                    </div>
                    <div className="work-tags-block">
                        {props.card.work_tags.map(tag=>
                            <div className="work-tag">{tag}</div>
                        )}
                    </div>
                    <div className="work-open-btn">Open case<img src={arrow2}/></div>
                </div>
                <div className="work-img-frame" id="bottles">
                    { props.card.images.map(img=>
                        <img className="work-img" id="first_img" src={require("../img/"+img)} alt=""/>
                    )}
                </div>
            </div>
            <div className="year-line-block">
                <div>2021</div>
                <div className="year-line"></div>
            </div>
        </div>
    )
}
export default CardWork;