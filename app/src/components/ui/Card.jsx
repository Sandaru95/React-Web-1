import React, { Component } from "react";
import "./Card.module.css";

class Card extends React.Component {
    render() {
        return <div className={classes.card}>{props.children}</div>;
    }
}

export default Card;
