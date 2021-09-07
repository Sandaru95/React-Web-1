import React, { Component } from "react";
import Modal from "./modal";
import Backdrop from "./backdrop";

class Todo extends React.Component {
    state = {
        modalState: false,
    };
    deleteHandler = () => {
        this.setState({ modalState: true });
    };
    backdropClickHandler = () => {
        this.setState({ modalState: false });
    };
    ModalCancelHandler = () => {
        this.setState({ modalState: false });
    };
    ModalConfirmHandler = () => {
        this.setState({ modalState: false });
    };
    render() {
        return (
            <div className="card">
                <h2>{this.props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={this.deleteHandler}>
                        Delete
                    </button>
                </div>
                {this.state.modalState && (
                    <Modal
                        ModalCancelHandler={this.ModalCancelHandler}
                        ModalConfirmHandler={this.ModalConfirmHandler}
                    />
                )}
                {this.state.modalState && (
                    <Backdrop backdropOnClick={this.backdropClickHandler} />
                )}
            </div>
        );
    }
}

export default Todo;
