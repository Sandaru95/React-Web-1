import React, { Component } from "react";

class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <p>Are you Sure?</p>
                <button className="btn btn--alt">Cancel</button>
                <button className="btn">Confirm</button>
            </div>
        );
    }
}

export default Modal;
