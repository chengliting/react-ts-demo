import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Home from '../container/home';

// const history = createBrowserHistory({ window });

export default class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <div>
                <Link to="Home">去首頁</Link>
                </div>
                    {/* 導航和路由耦合了!  https://stackoverflow.com/questions/69948150/property-history-does-not-exist-on-type-intrinsicattributes */}
                <Routes>
                <Route path="Home" element={<Home />} />
                </Routes>
          </Router>
        )
    }
}