/**
 * 這是Function component
 */
import React from 'react';
import { useLocation } from 'react-router'
import {  useNavigate   } from 'react-router-dom';
import Location from './Location';

function NavBottomBar(){
    const location = useLocation()
    const navigate  = useNavigate()
    const menuList = [
        {
            name:'Home',
            router:'/',
        },
        {
            name:'Pages',
            router:'Pages',
        },  {
            name:'Mine',
            router:'Mine',
        }
    ]


    const routerNameFunc = () => { // 獲取路由的名字
        let routerName = location.pathname.slice(1);
        return routerName||'Home'
    }

    const  switchNavTab = (routerName:string) =>{
        navigate(`/${routerName}`);  // 页面跳转
    }
    const  callback = (name: String) => {console.log(`name1-${name}`)}
    return (
        <div className="nav-bottom-bar">
            <div><Location parentCallback={(name:string)=>callback(name)}/></div>
            <ul>
               {
                 menuList.map((item, index) => {
                  return  <li key={index} onClick={()=>{switchNavTab(item.name)}}>
                    <span style={{color:(routerNameFunc() === item.name)? 'red':'#111'}}>{item.name}</span>
                  </li>
               })
               }
            </ul>
        </div>
    )

}
 export default NavBottomBar;