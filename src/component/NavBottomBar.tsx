/**
 * 這是Function component
 */
import React,{useState,useEffect} from 'react';
// import { Link, useNavigate   } from 'react-router-dom';
import {  useNavigate   } from 'react-router-dom';
import Location from './Location';

// let currentRouter = 'Home'
function NavBottomBar(){
    const navigate  = useNavigate()
    // useRef 和 useState的區別 https://blog.csdn.net/u010565037/article/details/124491244
    const [currentRouter,setCurrentRouter] = useState(''); // 初始化有狀態的函數, 
    // let currentRouter1 = React.useRef(currentRouter);
    // useEffect(() => {
    //     currentRouter1.current = currentRouter
    // },[])
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
    React.useEffect(() => {
      /* useEffect钩子函数，
        第一个参数传函数，
        第二个可选参数是个数组类型
        不传，则监控全局useState值，任何一个useState值发生变化则执行该函数
        传了，则监控该数组中的useState值，数组中的值发现变化则执行第一个参数的函数
        */
      console.log('effect----',currentRouter);
    //   setCurrentRouter(currentRouter); // 更新當前路由名字，useState更新觸發re-render
      }, [currentRouter]);

  const  switchNavTab = (routerName:string) =>{
        console.log('state的更新好奇怪?',routerName);
        setCurrentRouter(routerName); // 更新當前路由名字，useState更新觸發re-render
        navigate(`/${routerName}`);  // 页面跳转
       
      }
    const  callback = (name: String) => {
        console.log(`name1-${name}`)
      }
    return (
        <div className="nav-bottom-bar">
            <div><Location parentCallback={(name:string)=>callback(name)}/></div>
            <ul>
               {
                 menuList.map((item, index) => {
                  return  <li key={index} onClick={()=>{switchNavTab(item.name)}}>
                    <span style={{color:(currentRouter === item.name)? 'red':'#111'}}>{item.name}{currentRouter}</span>
                  </li>
               })
               }
            </ul>
        </div>
    )

}
 export default NavBottomBar;