import React, { Component } from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

class MeetupList extends React.Component {
    render() {
        return (
            <ul className={classes.list}>
                {this.props.meetups.map((meetup) => (
                    <MeetupItem
                        key={meetup.id}
                        id={meetup.id}
                        image={meetup.image}
                        title={meetup.title}
                        address={meetup.address}
                        description={meetup.description}
                    />
                ))}
            </ul>
        );
    }
}

export default MeetupList;
