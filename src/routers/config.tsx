import { listenerCount } from "process";
import * as React from "react"
import {Routes, Route,BrowserRouter as Router, Navigate} from "react-router-dom";

// import {RouteList} from "./config"

const renderRouter = (list: Array<any>) => {
    return list.map((item: any)=>{
        const {path} = item;
        return <div></div>
    })
}
export {}