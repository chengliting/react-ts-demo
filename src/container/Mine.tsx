import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Location from '../component/Location';
// 首頁
export default class Mine extends Component {
    render() {
        return (<div>
         我的
         <p>您現在位於<Location /></p>
         <Link to="/">返回首頁</Link>
        </div>)
    }
}