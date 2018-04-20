import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className = " nav navigation">
            <li><a href="/">Clicky Game</a></li>
            <li className={props.message.indexOf("incorrect") !== -1 ? 
            
                "des-incorrect" : 
                 
                 props.message.indexOf("correct") !==-1 ? 
                 
                    "desc-correct" : "desc-normal"}
            >
            {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.currentScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
)

export default Nav;