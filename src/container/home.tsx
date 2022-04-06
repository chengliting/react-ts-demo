import React, { Component } from 'react';
import Location from '../component/Location';
// 首頁
export default class Mine extends Component {
    render() {
        return (<div className='home-wrapper'>
            <p>您現在位於<Location /></p>
            首頁
        </div>)
    }
}