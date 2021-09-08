import React, { Component } from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

class NewMeetupPage extends React.Component {
    addMeetupHandler = (meetupData) => {
        fetch(
            "https://react-web-1-1756d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => (window.location.href = "/"));
    };
    render() {
        return (
            <section>
                <h1>Add New Meetup</h1>
                <NewMeetupForm addMeetupHandler={this.addMeetupHandler} />
            </section>
        );
    }
}

export default NewMeetupPage;
