import React from "react";
import "./card.css";

const Card = props => {
    <div className="card">
        <div className = "image-container">
            <a onClick = {() => props.selectImage(props.name)}
               className = {props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}>

               <img alt={props.name} src={props.image}></img>

            </a>
        </div>
    </div>
}

export default Card;