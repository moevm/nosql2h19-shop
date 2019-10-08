import React from 'react';
import { Header, Body } from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div>
            <Router>
                <Header />
                <Body />
            </Router>
        </div>
    );
}

export default Layout;