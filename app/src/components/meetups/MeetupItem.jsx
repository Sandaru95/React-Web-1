import React, { Component } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

class MeetupItem extends React.Component {
    render() {
        return (
            <Card>
                <li className={classes.item}>
                    <div className={classes.image}>
                        <img src={this.props.image} />
                    </div>
                    <div className={classes.content}>
                        <h3>{this.props.title}</h3>
                        <address>{this.props.address}</address>
                        <p>{this.props.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button>To Favourites</button>
                    </div>
                </li>
            </Card>
        );
    }
}

export default MeetupItem;
