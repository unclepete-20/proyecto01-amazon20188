import React from "react";
import { Component } from "react";
import "./NavigationBar.sass";

export default class NavigationBar extends Component {
    render() {
        return (
            <div className="navigation-bar">
                Navbar
                <div className="logo-placeholder"></div>
                <div className="location-placeholder">Guatemala</div>
            </div>
        );
    }
}



