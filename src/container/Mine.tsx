import React, { Component } from 'react';
import NavBottomBar from '../component/NavBottomBar';
import '../scss/Mine.scss'
// 首頁
export default class Mine extends Component {
    render() {
        return (<div className='mine-wrapper'>
            {/* <Link to="/">返回首頁</Link> */}
            <div className='mine-main'>
                <div className='mine-title-top'>
                    <span>我的</span>
                    <i>設置</i>
                </div>
            </div>
            <NavBottomBar/>
         </div>
         )
    }
}