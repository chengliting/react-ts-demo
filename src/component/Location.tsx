import React from 'react';
import { useLocation } from 'react-router-dom'

const Location = (props:any) => {
	const location = useLocation()
    
   const clickCount =()=>{
    const {parentCallback}=props;
    parentCallback(`{location.pathname}`)
    }
    return (
        <div onClick={() => clickCount()}>
            <span>Path is:{location.pathname}</span>
        </div>
    );
}

export default Location