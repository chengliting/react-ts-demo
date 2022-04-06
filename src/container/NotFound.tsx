import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 首頁
export default class NotFound extends Component {
    render() {
        return (<div>
         404
         <Link to="/">返回首頁</Link>
        </div>)
    }
}