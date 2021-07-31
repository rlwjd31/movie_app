import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// Navigation 밖에서는 동작하지 않으므로 Navigation component밑에 선언해 주어야 한다.
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
