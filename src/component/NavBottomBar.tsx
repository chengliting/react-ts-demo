/**
 * 這是Function component
 */
import React,{useState} from 'react';
// import { Link, useNavigate   } from 'react-router-dom';
import {  useNavigate   } from 'react-router-dom';
import Location from './Location';

// let currentRouter = 'Home'
function NavBottomBar(){
    const navigate  = useNavigate()
    // useRef 和 useState的區別 https://blog.csdn.net/u010565037/article/details/124491244
    // let currentRouter = React.useRef();
    const [currentRouter,setCurrentRouter] = useState('Home'); // 初始化有狀態的函數
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


  const  switchNavTab = (routerName:string) =>{
        // console.log(`routerName---${routerName}`)
        setCurrentRouter(routerName); // 更新當前路由名字
        console.log('為什麼要點擊2次tab才變紅?',routerName);
        navigate(`/${routerName}`);  // 页面跳转
      }
    const  callback = (name: String) => {
        console.log(`name1-${name}`)
      }
    return (
        <div className="nav-bottom-bar">
            <div><Location parentCallback={(name:string)=>callback(name)}/></div>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li onClick={()=>{switchNavTab('Mine')}}>Mine</li> */}
               {
                 menuList.map((item) => {
                  return  <li key={item.name} onClick={()=>{switchNavTab(item.name)}}>
                    <span style={{color:(currentRouter === item.name)? 'red':'#111'}}>{item.name}</span>
                  </li>
               })
               }
            </ul>
        </div>
    )

}
 export default NavBottomBar;