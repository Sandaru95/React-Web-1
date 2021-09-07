import React, { Component } from "react";

const DUMMY_DATA = [
    {
        id: "m1",
        title: "This is the first meetup",
        image: "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768",
        address: "7/A Avenue Road, Colombo 5",
        description: "This is the place for our first meetup",
    },
    {
        id: "m2",
        title: "This is the second meetup",
        image: "https://p.bookcdn.com/data/Photos/r1280x722/10148/1014817/1014817417/Hotel-Sanushi-photos-Exterior-Hotel-Sanushi.JPEG",
        address: "255/Queen Mary Road, Gampaha.",
        description: "This is the place for our first meetup",
    },
    {
        id: "m3",
        title: "This is the third meetup",
        image: "https://i.pinimg.com/originals/ca/40/e2/ca40e205b720c5c8364a348aa16bf066.jpg",
        address: "276/B, Niwandama, Gampaha",
        description: "This is the place for our first meetup",
    },
];

class AllMeetupsPage extends React.Component {
    render() {
        return (
            <section>
                <h2>All Meetups</h2>
                {DUMMY_DATA.map((i) => {
                    return (
                        <li key={i.id}>
                            <h3>{i.title}</h3>
                            <img src={i.image} />
                            <p>{i.description}</p>
                        </li>
                    );
                })}
            </section>
        );
    }
}

export default AllMeetupsPage;
