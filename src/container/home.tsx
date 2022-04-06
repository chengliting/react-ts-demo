import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Home.scss'
import { useLocation } from 'react-router-dom'
interface IProps {
}
interface IState {
    currentIndex: number,
    date: Date
}

export default class Home extends React.Component<IProps, IState>  {
    timerID: number;
    constructor(props:IProps) {
        super(props);
        this.timerID = 0;
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
    }
  
    componentWillUnmount() {
        console.log('lifecycle---->>>componentWillUnmount')
        clearInterval(this.timerID);
    }
    // const location = useLocation();
//   const { from, pathname } = location
    tick = () =>{
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (  
        <div className="App">
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <div className="main">
            主頁
            </div>
            <div className="nav-bar">
                <ul>
                    <li>首頁</li>
                    <li>tab</li>
                    <li><Link to="Mine">我的</Link></li>
                </ul>
            </div>
        </div>)
    }
}

// function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);