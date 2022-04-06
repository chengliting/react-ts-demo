import React from 'react';
import { Link } from 'react-router-dom';
import Location from './Location';
// 首頁
export default class NavBottomBar extends React.Component {
    callback = (name: any) => {
        console.log(`name-${name}`)
      }
    render() {
        return (<div className="nav-bottom-bar">
            <p><Location parentCallback={this.callback}/></p>
        <ul>
            <li><Link to="/">首頁</Link></li>
            <li>tab</li>
            {/* 位於當前頁再點擊當前tab有問題 */}
            <li><Link to="Mine">我的</Link></li>
        </ul>
    </div>)
    }
}