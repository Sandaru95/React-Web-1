import React, { Component } from "react";

class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <p>Are you Sure?</p>
                <button
                    className="btn btn--alt"
                    onClick={this.props.ModalCancelHandler}
                >
                    Cancel
                </button>
                <button
                    className="btn"
                    onClick={this.props.ModalConfirmHandler}
                >
                    Confirm
                </button>
            </div>
        );
    }
}

export default Modal;
