import React, { Component } from "react";

class Backdrop extends React.Component {
    render() {
        return (
            <div
                className="backdrop"
                onClick={this.props.backdropOnClick}
            ></div>
        );
    }
}

export default Backdrop;
