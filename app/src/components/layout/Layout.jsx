import React, { Component } from "react";
import classes from "./Layout.module.css";
import MainNav from "./MainNav";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <MainNav />
                <main>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;
