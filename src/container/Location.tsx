import React from 'react';
import { useLocation } from 'react-router-dom'

const Location = () => {
	const location = useLocation()
    
    // location.pathname is '/users/new'
    return <span>Path is:{location.pathname}</span>
}

export default Location