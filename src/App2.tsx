import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './container/navigationBar';
// 入口文件?主頁文件?
export default class Main extends Component {
    render() {
        return (<div>
            <NavigationBar>
                <Link to="home">首頁</Link>
                <Link to="tab">tab</Link>
                <Link to="mine">我的</Link>
            </NavigationBar>
        </div>)
    }
}