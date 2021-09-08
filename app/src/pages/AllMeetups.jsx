import React, { Component } from "react";
import MeetupList from "../components/meetups/MeetupList";

class AllMeetupsPage extends React.Component {
    state = {
        meetupsArray: [],
        isLoading: true,
    };
    componentDidMount() {
        fetch(
            "https://react-web-1-1756d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
        )
            .then((response) => response.json())
            .then((data) => {
                const meetups = [];
                for (const x in data) {
                    meetups.push({ id: x, ...data[x] });
                }
                this.setState({ isLoading: false, meetupsArray: meetups });
            });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isLoading && <h2>Loading...</h2>}
                {this.state.isLoading == false && (
                    <section>
                        <h2>All Meetups</h2>
                        <MeetupList meetups={this.state.meetupsArray} />
                    </section>
                )}
            </React.Fragment>
        );
    }
}

export default AllMeetupsPage;
