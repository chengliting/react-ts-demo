import React from 'react';
import { useLocation } from 'react-router-dom'

const Location = (props:any) => {
	const location = useLocation()
    const pathName = location.pathname.slice(1,location.pathname.length);
    
   const clickCount =()=>{
    const {parentCallback}=props;
    parentCallback(pathName) // 調用父組件函數並傳值
    }
    return (
        <div onClick={() => clickCount()}>
            <span className='location-text'>您現在位於:{pathName||'首頁'}</span>
        </div>
    );
}

export default Location