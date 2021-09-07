import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";

class MainNav extends React.Component {
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.logo}>React Meetup</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Meetups</Link>
                        </li>
                        <li>
                            <Link to="/new-meetup/">New Meetup</Link>
                        </li>
                        <li>
                            <Link to="/favourites/">Favourites</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default MainNav;
