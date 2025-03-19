import React from "react";
import './card.css';

function Card(props) {
    return (
        <>
            <div className="car">
                <div className="car-body">
                    
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Card;