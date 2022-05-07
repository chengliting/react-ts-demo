import React from 'react';
import { Link, useNavigate   } from 'react-router-dom';
import Location from './Location';
interface IProps {
}
interface IState {
    currentIndex: number,
    routerName: String
}
function NavBottomBar(){
    const navigate  = useNavigate()
  const  switchNavTab = (routerName:String) =>{
        console.log(`routerName-${routerName}`)
        //TODO: click switch router
        // 页面跳转方法
        navigate('/Mine');
      }
    const  callback = (name: String) => {
        console.log(`name-${name}`)
      }
    return (
        <div className="nav-bottom-bar">
            <div><Location parentCallback={(name:string)=>callback(name)}/></div>
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li>tab</li>
                {/* 位於當前頁再點擊當前tab有問題 */}
                {/* <li><Link to="Mine">我的</Link></li> */}
                <li onClick={()=>{switchNavTab('Mine')}}>我的</li>
            </ul>
        </div>
    )

}
 export default NavBottomBar;