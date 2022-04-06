import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Home.scss';
import Location from './Location';
import { useLocation } from 'react-router-dom'
interface IProps {
}
interface IState {
    currentIndex: number,
    date: Date
}

export default class Home extends React.Component<IProps, IState>  {
    timerID: number;
    // location: useLocation;
    constructor(props:IProps) {
        super(props);
        this.timerID = 0;
        // this.location = useLocation();
        this.state = {
            currentIndex:0,
            date: new Date()
        };
      }
    componentDidMount() {
        console.log('lifecycle---->>>componentDidMount')
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
          );
        //   this.setLoaction();
    }
  
    componentWillUnmount() {
        console.log('lifecycle---->>>componentWillUnmount')
        clearInterval(this.timerID);
    }

    tick = () =>{
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (  
        <div className="App">
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <div><Location></Location></div>
            <div className="main">
            主頁
            </div>
            <div className="nav-bottom-bar">
                <ul>
                    <li>首頁</li>
                    <li>tab</li>
                    <li><Link to="Mine">我的</Link></li>
                </ul>
            </div>
        </div>)
    }
}

