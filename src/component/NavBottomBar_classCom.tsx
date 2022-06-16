/**
 * 這是class component, useNavigate不能在class component中使用!
 */
import React from 'react';
import { Link, useNavigate   } from 'react-router-dom';
import Location from './Location';
interface IProps {
}
interface IState {
    currentIndex: number,
    routerName: String
}
export default class NavBottomBar extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            currentIndex:0,
            routerName:''
        };
      }
      callback = (name: String) => {
        console.log(`name2-${name}`)
      }
      switchNavTab = (routerName:String) =>{
        console.log(`routerName-${routerName}`)
        //TODO: click switch router
        try {
            const navigate  = useNavigate()
            // 页面跳转方法
            navigate('/Mine');
        } catch (error) {
            console.log('錯誤-',error);
            
        }
       
      }
    render() {
        return (<div className="nav-bottom-bar">
            <div><Location parentCallback={this.callback}/></div>
        <ul>
            <li><Link to="/">首頁</Link></li>
            <li>tab</li>
            {/* 位於當前頁再點擊當前tab有問題 */}
            {/* <li><Link to="Mine">我的</Link></li> */}
            <li onClick={()=>{this.switchNavTab('Mine')}}>我的</li>
        </ul>
    </div>)
    }
}