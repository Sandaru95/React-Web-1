import React, { Component } from "react";

class Todo extends React.Component {
    deleteHandler = () => {
        console.log("Delete Handler was called!");
        console.log(this.props.text);
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
            </div>
        );
    }
}

export default Todo;
