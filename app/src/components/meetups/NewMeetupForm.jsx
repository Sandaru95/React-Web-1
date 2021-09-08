import React, { Component, useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

class NewMeetupForm extends React.Component {
    titleInputRef = React.createRef();
    imageInputRef = React.createRef();
    addressInputRef = React.createRef();
    descriptionRef = React.createRef();

    submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = this.titleInputRef.current.value;
        const enteredImage = this.imageInputRef.current.value;
        const enteredAddress = this.addressInputRef.current.value;
        const enteredDescription = this.descriptionRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        this.props.addMeetupHandler(meetupData);
    };
    render() {
        return (
            <Card>
                <form
                    className={classes.form}
                    onSubmit={(event) => {
                        this.submitHandler(event);
                    }}
                >
                    <div className={classes.control}>
                        <label htmlFor="title">Meetup Title</label>
                        <input
                            type="text"
                            id="title"
                            ref={this.titleInputRef}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="image">Meetup Image</label>
                        <input
                            type="url"
                            id="image"
                            ref={this.imageInputRef}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            ref={this.addressInputRef}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            rows="5"
                            ref={this.descriptionRef}
                            required
                        ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button>Add Meetup</button>
                    </div>
                </form>
            </Card>
        );
    }
}

export default NewMeetupForm;
