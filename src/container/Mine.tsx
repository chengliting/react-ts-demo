import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 首頁
export default class Mine extends Component {
    render() {
        return (<div>
         我的
         <Link to="/">返回首頁</Link>
        </div>)
    }
}