import React from "react";


export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "rgb(190, 137, 255)" : "transparent"
    }
    return (
        <div 
            className="Die" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}