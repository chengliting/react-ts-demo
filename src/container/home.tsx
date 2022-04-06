import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Home.scss'
// 首頁
export default class Home extends Component {
    render() {
        return (  
        <div className="App">
            <div className="main">
            主頁
            </div>
            <footer>
                <ul>
                    <li>首頁</li>
                    <li>tab</li>
                    <li><Link to="Mine">我的</Link></li>
                </ul>
            </footer>
        </div>)
    }
}